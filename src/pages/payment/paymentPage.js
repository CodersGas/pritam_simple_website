import { useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import HelpIcon from '@mui/icons-material/Help';
import { Block } from "../../components";
import { rechargeOptions, paymentOptions, faqContent } from "../../constants";

const PaymentPage = (props) => {
	const [rechargeType, setRechargeType] = useState("60uc");
	const [selectedPayment, setSelectedPayment] = useState("");
	const [userId, setUserId] = useState("");
	const [email, setEmail] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [visiblePrice, setVisiblePrice] = useState(rechargeOptions[0].price);

	const handlePriceChange = (index, rechargeOption) => {
		setVisiblePrice(rechargeOptions[index].price);
		setRechargeType(rechargeOption);
	}

	return (
		<div>
			<Grid container alignItems="center" justifyContent="center" className="centerBodyContent" >
				<Grid item xl={8} lg={8} md={8} xs={12} sm={12} >
					<Grid container spacing={8} className="allOptionsContainer"  >
						<Grid item md={4} >
							<div >
								<img
									src="https://cdn1.codashop.com/S/content/common/images/mno/BGIM_Banner.jpg"
									alt="BGIM banner"
								/>

								<div className="leftGridContentDiv">
									<p>
										BATTLEGROUNDS MOBILE INDIA
									</p>

									<p>
										Cashback Offers: <Link href="https://news.codashop.com/in/top-up-your-favourite-games-apps-on-codashop-and-avail-exciting-cashback-offers/?_ga=2.93714782.237443839.1646553474-345728412.1646553474" >Terms & Conditions</Link>
									</p>

									<p>
										Buy BATTLEGROUNDS MOBILE INDIA UC in seconds! Just enter your BGMI user ID, select the value of UC you wish to purchase, complete the payment, and the UC will be added immediately to your BATTLEGROUNDS MOBILE INDIA account.
									</p>

									<p>
										Pay with Paytm, Mobikwik, UPI, FreeCharge, Payzapp, Net Banking, Simpl, LazyPay, and Card Payment. There's no registration, or login required. Purchase BGMI UC today and enjoy a seamless top up experience only at Codashop!
									</p>

									<p>
										<b>Reminder:</b>
									</p>

									<p>
										Please restart the game app after you complete the payment to receive the UC.
									</p>

									<p>
										This page is only for BATTLEGROUNDS MOBILE INDIA top-up. Users who are playing games other than BATTLEGROUNDS MOBILE INDIA can not receive UC after purchased, so these users please do not top-up here.
									</p>

									<p>
										Download & play BATTLEGROUNDS MOBILE INDIA today!
									</p>

									<div>
										<Link href="https://play.google.com/store/apps/details?id=com.pubg.imobile&referrer=adjust_reftag%3DcOA0SLvi1YrS8%26utm_source%3D210618_BGMI%2BLaunching_HP" >
											<img
												src="https://d1qgcmfii0ptfa.cloudfront.net/S/content/mobile/images/google_play_coda.png"
												alt="Play store link"
												className="logoIcon"
											/>
										</Link>
									</div>
								</div>
							</div>
						</Grid>

						<Grid item md={8} >
							<div className="allBlocksContainer" >
								<Block
									blockNumber={1}
									heading="Enter User ID"
								>
									<div className="userIdDiv blockContent" >
										<div className="inputHelpDiv" >
											<input
												placeholder="Enter User Id"
												type="number"
												className="userIdInput"
												onChange={(e) => setUserId(e.target.value)}
												value={userId}
											/>
											<HelpIcon className="helpIcon" fontSize="large" />
											<div className="helpImageDiv">
												<img
													src="https://cdn1.codashop.com/S/content/common/images/helpers/256.png"
													className="helpImage"
												/>
											</div>
										</div>
										<p className="suggestion" >
											To find your User ID, tap your Avatar on the top left corner of the Lobby screen. Your User ID is shown below your nickname (example: 551234567890).
										</p>
									</div>
								</Block>

								<Block
									blockNumber={2}
									heading="Select Recharge"
								>
									<div className="allRechargeOptions blockContent" >
										{
											rechargeOptions.map((option, index) => (
												<div
													key={option.key}
													className={"rechargeOptionDiv" + (rechargeType === option.value ? " rechargeOptionDivSelected" : "")}
													onClick={() => handlePriceChange(index, option.value)}
												>
													<span>{option.text}</span>
												</div>
											))
										}
									</div>
								</Block>

								<Block
									blockNumber={3}
									heading="Select Payment"
								>
									<div className="allPaymentsContainer blockContent" >
										{
											paymentOptions.map((option, index) => (
												<div
													key={option.key}
													className={"eachPaymentDiv" + (option.value === selectedPayment ? " selectedPaymentDiv" : "")}
													onClick={() => setSelectedPayment(option.value)}
												>
													<img
														src={option.icon}
														className="logoIcon"
													/>
													<div>
														<p>PRICE</p>
														<span className="rechargeAmt" >{visiblePrice}</span>
													</div>

													{
														selectedPayment === option.value &&
														<p className="paymentSubtext" >
															{option.subtext}
														</p>
													}
												</div>
											))
										}
									</div>
								</Block>

								<Block
									blockNumber={4}
									heading="Buy!"
								>
									<div className="buyDiv" >
										<p>
											OPTIONAL:  If you would like a receipt of the purchase by email, please enter an email address
										</p>

										<input
											placeholder="E-mail address"
											className="emailInput"
											type="email"
											onChange={(e) => setEmail(e.target.value)}
											value={email}
										/>

										<div className="buyBottomDiv" >
											<div className="checkboxInputDiv" >
												<input
													name="rememberMe"
													type="checkbox"
													checked={rememberMe}
													onChange={(e) => setRememberMe(e.target.checked)}
												/>
												<label htmlFor="rememberMe" >Remember me</label>
											</div>

											<button
												className="buyButton"
												type="button"
											>
												Buy Now
											</button>
										</div>
									</div>
								</Block>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<div className="customerContentOne" >
				<p>
					Convenient & affordable BGMI UC Purchase only at Codashop India
				</p>

				<p>
					You are seconds away from buying UC for BATTLEGROUNDS MOBILE INDIA. With UC you can purchase crates, outfits, gun skins, companions, emotes, accessories, treasures, Battle Pass, vehicle skins, and more!
				</p>

				<p>
					Look no further than Codashop and enjoy an easy, safe and hassle-free top up experience. We are trusted by gamers & app users in India. <Link href="https://www.codashop.com/en-in/battlegrounds-mobile-india#top" >Click here to get started.</Link>
				</p>

				<p>
					Why choose Codashop for BATTLEGROUNDS MOBILE INDIA top up?
				</p>

				<p className="boldText" >
					Easy & Fast
				</p>

				<p>
					It only takes a few seconds to complete a purchase on Codashop.
				</p>

				<p className="boldText">
					Guaranteed delivery
				</p>

				<p>
					BGMI UC are delivered straight to your in-game account.
				</p>

				<p className="boldText">
					Convenient payment methods
				</p>

				<p>
					Pay using the most popular payment methods in India
				</p>

				<p className="boldText">
					World-class customer support
				</p>

				<p>
					Our support team are always ready to help 24/7. Send us a message through this form and we will get right back to you!
				</p>

				<p className="boldText">
					Exciting promotions
				</p>

				<p>
					Never miss out on awesome deals, giveaways and more only at Codashop!
				</p>
			</div>

			<div className="customerContentTwo" >
				{
					faqContent.map((content, index) => (
						<div className="eachQuestionDiv" key={content.key} >
							<p className="questionTitle" >
								{content.question}
							</p>

							<div className="answerDiv" >
								{content.answer}
							</div>

							<div>
								{
									content.bottomContent &&
									content.bottomContent
								}
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default PaymentPage;