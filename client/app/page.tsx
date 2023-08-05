"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";
import { PiLinkedinLogoDuotone, PiGithubLogoDuotone } from "react-icons/pi";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="border-2 p-10 gap-4 flex flex-col justify-between rounded-md">
				<h1 className="self-center text-yellow-500 font-semibold">
					Under construction
				</h1>
				<ProgressBar
					completed={10}
					bgColor="grey"
					height="1.5rem"
					width="400px"
					labelColor="#FFEB3B"
					transitionDuration="2s"
				/>
				<div className="flex flex-col">
					<h2 className="self-center">
						Developed by:{" "}
						<Link
							href="https://kincunico.dev"
							target="_blank"
							className="text-blue-500 font-bold"
						>
							Kin Cunico
						</Link>
					</h2>
					<div className="flex justify-evenly align-middle text-4xl text-yellow-500">
						<Link
							href="https://www.linkedin.com/in/kincunicoen/"
							target="_blank"
						>
							<PiLinkedinLogoDuotone />
						</Link>
						<Link
							href="https://github.com/kin-cunico"
							target="_blank"
						>
							<PiGithubLogoDuotone />
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
