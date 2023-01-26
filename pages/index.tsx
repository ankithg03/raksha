import Page from '@/components/page'
import Section from '@/components/section'

const Index = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Hello <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>!!
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
				{'Meet Sree Raksha, a '}<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						system engineer
					</span>{'  with 1.5 years of IT experience. Sree Raksha is passionate about technology and is always looking for ways to improve and learn new skills. Recently, Raksha has decided to make a career transition into '}<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						data analytics
					</span>{' , in order to explore the field and utilize their analytical skills to gain insights from data. Raksha has experience in maintaining and troubleshooting systems and networks, and is now eager to apply those skills in the realm of data analysis. Sree Raksha is a quick learner, ambitious, and eager to expand their skill set in '}<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						data analytics
					</span>{' including machine learning and statistical modeling. With Sree Raksha\'s strong technical background and eagerness to learn, I\'am is confident that I will excel in a new role as a data analyst.'}
				</p>

				<br />

				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a
						href='https://github.com/SreeRaksha98'
						className='underline'
					>
						know more
					</a>
				</p>
			</div>
		</Section>
		<Section>
		<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				Timeline
			</h2>
			<div className="min-h-screen flex items-center justify-center">
				<div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
					{/* Start */}
					<div className="flex flex-row-reverse md:contents">
					<div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
						<h3 className="font-semibold text-xl mb-1 text-gray-900">2013</h3>
						<p className="text-gray-600">{"Schooling at Marimallappa's High School"}</p>
					</div>

					<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
						<div className="h-full w-6 flex items-center justify-center">
						<div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
						</div>

						<div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
					</div>
					</div>

					<div className="flex md:contents">
					<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
						<div className="h-full w-6 flex items-center justify-center">
						<div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
						</div>

						<div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
					</div>
					{/* End	 */}
					<div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
						<h3 className="font-semibold text-xl mb-1 text-gray-900">2015</h3>
						<p className="text-gray-600">{"St.Philomena's PU College"}</p>
					</div>
					</div>

					<div className="flex flex-row-reverse md:contents">
					<div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
						<h3 className="font-semibold text-xl mb-1 text-gray-900">2019</h3>
						<p className="text-gray-600">GSSS Institute of Engineering and Technology for Women’s</p>
					</div>

					<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
						<div className="h-full w-6 flex items-center justify-center">
						<div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
						</div>

						<div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
					</div>
					</div>

					<div className="flex md:contents">
					<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
						<div className="h-full w-6 flex items-center justify-center">
						<div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
						</div>

						<div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
					</div>

					<div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
						<h3 className="font-semibold text-xl mb-1 text-gray-900">2020-2021</h3>
						<p className="text-gray-600">Intern at Dell EMC.</p>
					</div>
					</div>
					<div className="flex flex-row-reverse md:contents">
					<div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
						<h3 className="font-semibold text-xl mb-1 text-gray-900">2021</h3>
						<p className="text-gray-600">JSS Science and Technology University.</p>
					</div>

					<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
						<div className="h-full w-6 flex items-center justify-center">
						<div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
						</div>

						<div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
					</div>
					</div>
					<div className="flex md:contents">
					<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
						<div className="h-full w-6 flex items-center justify-center">
						<div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
						</div>

						<div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
					</div>

					<div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
						<h3 className="font-semibold text-xl mb-1 text-gray-900">On Going</h3>
						<p className="text-gray-600">
						<strong>Engineer</strong><br/>
						Cerner Corporation · Full-time</p>
					</div>
					</div>
				</div>
			</div>
		</Section>
	</Page>
)

export default Index
