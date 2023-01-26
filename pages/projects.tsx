import Page from '@/components/page'
import Section from '@/components/section'

const Projects = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Projects</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Like any good recipe, we appreciate community offerings to cultivate a
					delicous dish.
				</p>
			</div>
		</Section>

		<Section>
			<div className="bg-gray-200 py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-4 md:grid-cols-3">
				<div className="max-w-xl mx-auto">
					<div className="p-10 bg-white rounded-lg shadow-xl overflow-hidden">
					<h3 className="font-bold text-gray-800">Proj 01 &bull; Python Tkinter</h3>
					<p className="mt-4 max-w-lg text-sm leading-5 text-gray-700">The Project Consists of Calculator Application & Basic Example of Tkinter .</p>
					<a href="https://github.com/SreeRaksha98/python_tkinter" className="mt-3 inline-block text-sm leading-5 font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500">GitHub Link</a>
					<p className="mt-6 text-xs leading-4 font-medium text-gray-600">Jan 15th 2023</p>
					</div>
				</div>
				<div className="max-w-xl mx-auto">
					<div className="p-10 bg-white rounded-lg shadow-xl overflow-hidden">
					<h3 className="font-bold text-gray-800">Proj 02 &bull; Python Projects</h3>
					<p className="mt-4 max-w-lg text-sm leading-5 text-gray-700">Hackerrank solutions which consists.
					<ul className='bg-white rounded-lg w-full text-gray-900'>
						<li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Guesing Game.</li>
						<li className="px-6 py-2 border-b border-gray-200 w-full">String Transformation code.</li>
						<li className="px-6 py-2 w-full rounded-b-lg">Emoji converter.</li>
					</ul>
					</p>
					<a href="https://github.com/SreeRaksha98/python_projects" className="mt-3 inline-block text-sm leading-5 font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500">GitHub Link</a>
					<p className="mt-6 text-xs leading-4 font-medium text-gray-600">Jan 15th 2023</p>
					</div>
				</div>
				<div className="max-w-xl mx-auto">
					<div className="p-10 bg-white rounded-lg shadow-xl overflow-hidden">
					<h3 className="font-bold text-gray-800">Proj 03 &bull; T20 Cricket Analysis</h3>
					<p className="mt-4 max-w-lg text-sm leading-5 text-gray-700">data visualization project for T20 cricket match analysis for selecting playing 11</p>
					<a href="https://github.com/SreeRaksha98/t20_cricket_analysis" className="mt-3 inline-block text-sm leading-5 font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500">GitHub Link</a>
					<p className="mt-6 text-xs leading-4 font-medium text-gray-600">Jan 15th 2023</p>
					</div>
				</div>
			</div>
		</Section>
		<Section>
			<h3><strong>Dashboard</strong></h3>
			<iframe title="Report Section" width="100%" height="720" src="https://app.powerbi.com/view?r=eyJrIjoiOGM4MTJiNDAtNThhYS00Y2FkLTllNDgtMDQ3NmY3ZDBkYmIyIiwidCI6ImRmMzVkNTc0LTlmYmEtNDhjZS1hMDczLTczNzg2OGQ3N2E0OCIsImMiOjZ9" frameBorder="0" allowFullScreen={true}></iframe>
		</Section>
	</Page>
)

export default Projects
