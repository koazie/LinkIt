import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import SVGGithub from '../public/assets/github-brands.svg';
import SVGHome from '../public/assets/house-solid.svg';
import SVGInstagram from '../public/assets/instagram-brands.svg';
import SVGTwitter from '../public/assets/twitter-brands.svg';
import koazie from '../public/koazie_koaz.png';

const Home: NextPage = () => {
	return (
		<div className='max-w-full py-24'>
			<Head>
				<title>Joza - Linken</title>
			</Head>

			<div className='min-w-full flex justify-center items-center flex-col gap-3'>
				<div>
					<Image
						className='border-3 border-stone-900 rounded-full '
						src={koazie}
						alt='picture'
						width={150}
						height={150}
					/>
				</div>

				<h1>
					<a
						href='https://linkedin.com/in/jozasmith/'
						target='_blank'
					>
						<span className='border-2 rounded-full p-1 bg-stone-50 text-black '>@koazi_</span>
					</a>
				</h1>

				<ul className='flex gap-3 flex-col box-border m-0 p-8 cursor-pointer'>
					<li className='border-2 border-stone-900 backdrop-opacity-60 backdrop-invert'>
						<a
							href='https://koazie.me'
							target='_blank'
							rel='noopener'
						>
							<Image src={SVGHome} width='20' height='20' />
							Official Website
						</a>
					</li>
					<li className='border-2 border-stone-900 '>
						<a
							href='https://www.instagram.com/koazi_'
							target='_blank'
							rel='noopener'
						>
							<Image
								src={SVGInstagram}
								width='20'
								height='20'
							/>
							Instagram
						</a>
					</li>
					<li className='border-2 border-stone-900 '>
						<a
							href='https://www.twitter.com/koaziejoza'
							target='_blank'
							rel='noopener'
						>
							<Image
								src={SVGTwitter}
								width='20'
								height='20'
							/>
							Twitter
						</a>
					</li>
					<li className='border-2  border-stone-900 '>
						<a
							href='https://www.github.com/koazie'
							target='_blank'
							rel='noopener'
						>
							<Image
								src={SVGGithub}
								width='20'
								height='20'
							/>
							Github
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;




