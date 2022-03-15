import React, {useState, useEffect} from "react";

import {collection, doc, onSnapshot, orderBy, query, setDoc, where} from "firebase/firestore";

// icons
// import { AiTwotoneStar } from "react-icons/ai";

//components
import {HashLink as Link} from "react-router-hash-link";
import {Button, Message, Rate} from "rsuite";

//styled
import {
	ReviewSessionsContainer,
	ReviewSessionsContainerNote,
	ReviewSessionsContaineNumber,
	ReviewBodyContainer,
	ReviewBodyWrapper,
	ReviewBodyDescription,
	ReviewBodyTitle,
	ReviewAddWraper,
	ReviewSessionsContainerHeader
} from "./ReviewStyle";
import {WhySessionsContainerHalf} from "../WhySection/WhyStyle";
import {SessionHeader, SessionsTitle} from "../Testimonial/TestimonialStyle";
import {ContactSectionInputWrapper} from "../Contacts/ContactStyle";

import {db, formatNumber, returnTimeStamp} from "../../Config";

const AboutSection = () => {
	const init = {
		rate: 0.0,
		name: "",
		message: "",
		created_at: new Date(),
		id: returnTimeStamp()
	}

	const [form, setForm] = useState(init)
	const [reviewList, setReviewList] = useState([])
	const [moyenne, setMoyenne] = useState(0)
	const [isSend, sestIsSend] = useState(false)

	useEffect(() => {
		const request = query(
			collection(db, "reviews"),
			orderBy("created_at", "desc")
		);

		return onSnapshot(request, (querySnapshot) => {
			const data = []
			let rateTotal = 0
			querySnapshot.forEach(doc => {
				const value = doc.data()
				rateTotal += value.rate
				data.push(value)
			})
			if (data.length !== 0) setMoyenne(rateTotal / data.length)
			setReviewList(data)
		})
	}, [])

	const sendReview = () => {
		setDoc(doc(db, "reviews", form.id), {
			...form,
		}).then(() => {
			setForm(init)
			sestIsSend(true)
		});
	}

	const getLabelMonth = number => {
		const month = ['January', 'February', 'Match', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December']
		return month[number]
	}

	return (
		<ReviewSessionsContainer>
			<WhySessionsContainerHalf>
				<ReviewSessionsContainerHeader>
					<SessionsTitle>REVIEWS</SessionsTitle>
					<SessionHeader>
						What customers say about us?
						<ReviewSessionsContainerNote>
							{" " + moyenne}
							<ReviewSessionsContaineNumber>
								<Rate value={moyenne} allowHalf readOnly size="xs"/>
							</ReviewSessionsContaineNumber>
							<span>({formatNumber(reviewList.length)})</span>
						</ReviewSessionsContainerNote>
					</SessionHeader>
				</ReviewSessionsContainerHeader>

				<ReviewBodyContainer>
					{
						reviewList.map((item, key) => (
							<ReviewBodyWrapper key={`review-${key}`}>
								<ReviewBodyTitle>
									{item.name}
									<span>{`${getLabelMonth(item.created_at.toDate().getMonth())} ${item.created_at.toDate().getDate()}`}</span>
								</ReviewBodyTitle>
								<ReviewSessionsContainerNote>
									{" " + item.rate}
									<ReviewSessionsContaineNumber>
										<Rate value={item.rate} allowHalf readOnly size="xs"/>
									</ReviewSessionsContaineNumber>
								</ReviewSessionsContainerNote>
								<ReviewBodyDescription>
									{item.message}
								</ReviewBodyDescription>
							</ReviewBodyWrapper>
						))
					}

				</ReviewBodyContainer>
			</WhySessionsContainerHalf>

			<WhySessionsContainerHalf>
				<ReviewAddWraper>
					{isSend && (
						<Message type="success">Thank you for your feedback, your review have been posted.</Message>)}
					<SessionHeader style={{fontSize: 24}}>
						Let’s us know how we did
					</SessionHeader>
					<Rate
						value={form.rate}
						allowHalf
						onChange={value => setForm({...form, rate: value})}
					/>
					<ContactSectionInputWrapper fitsize>
						<label style={{color: "#000"}}>Name</label>
						<input
							type="text"
							name="from_name"
							placeholder="Enter your name here"
							required
							className="name-input"
							value={form.name}
							onChange={(e) => setForm({...form, name: e.target.value})}
						/>
					</ContactSectionInputWrapper>
					<ContactSectionInputWrapper fitsize>
						<label className="marg-label" style={{color: "#000"}}>
							Your review
						</label>
						<textarea
							name="message"
							placeholder="Enter your review here"
							required
							value={form.message}
							onChange={(event) => setForm({...form, message: event.target.value})}
						/>
					</ContactSectionInputWrapper>
					<Button
						type="submit"
						appearance="ghost"
						className="buttonsubmit"
						style={{marginTop: 20}}
						onClick={() => sendReview()}
					>
						Post your review
					</Button>
				</ReviewAddWraper>
			</WhySessionsContainerHalf>
		</ReviewSessionsContainer>
	);
};

export default AboutSection;
