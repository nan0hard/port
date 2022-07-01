import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a href="https://twitter.com/nan0hard" target="_blank" rel="noreferrer">
					<BsTwitter />
				</a>
			</div>
			<div>
				<a href="https://github.com/nan0hard/" target="_blank" rel="noreferrer">
					<BsGithub />
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/nanohard/"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
