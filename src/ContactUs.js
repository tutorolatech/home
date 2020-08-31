import React from "react";
function Contact() {
	return (
		<div className="site-section bg-light" id="contact-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-7">
						<h2 className="section-title mb-3">Message Us</h2>
						<p className="mb-5">
							Natus totam voluptatibus animi aspernatur ducimus
							quas obcaecati mollitia quibusdam temporibus culpa
							dolore molestias blanditiis consequuntur sunt nisi.
						</p>

						<form method="post" data-aos="fade">
							<div className="form-group row">
								<div className="col-md-6 mb-3 mb-lg-0">
									<input
										type="text"
										className="form-control"
										placeholder="First name"
									/>
								</div>
								<div className="col-md-6">
									<input
										type="text"
										className="form-control"
										placeholder="Last name"
									/>
								</div>
							</div>

							<div className="form-group row">
								<div className="col-md-12">
									<input
										type="text"
										className="form-control"
										placeholder="Subject"
									/>
								</div>
							</div>

							<div className="form-group row">
								<div className="col-md-12">
									<input
										type="email"
										className="form-control"
										placeholder="Email"
									/>
								</div>
							</div>
							<div className="form-group row">
								<div className="col-md-12">
									<textarea
										className="form-control"
										id=""
										cols="30"
										rows="10"
										placeholder="Write your message here."
									></textarea>
								</div>
							</div>

							<div className="form-group row">
								<div className="col-md-6">
									<input
										type="submit"
										className="btn btn-primary py-3 px-5 btn-block btn-pill"
										value="Send Message"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Contact;
