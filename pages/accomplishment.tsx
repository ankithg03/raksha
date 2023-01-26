import Page from '@/components/page'
import Section from '@/components/section'

const Accomplishment = () => (
	<Page>
		<Section>
			
			<h2 className='text-xl font-semibold'>Accomplishment</h2>
			<div className='mt-2'>
			<p><strong>Publications</strong>&nbsp;</p>
				<ul className='bg-white rounded-lg w-full text-gray-900'>
					<li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Published the paper on &lsquo;Speech to Sign Language Conversion using CNN&rsquo; in IJERT journal on 20th July 2021.&nbsp;</li>

					<li className="px-6 py-2 w-full rounded-b-lg">Published the paper on &lsquo;Stuttered Speech Recognition using CNN&rsquo; in IJERT journal on the year of 2021.&nbsp;</li>
				</ul>
			
			<p><strong>Certifications</strong></p>
				<ul className='bg-white rounded-lg w-full text-gray-900'>
					<li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Certification on python course (Certifier: MicroDegree).&nbsp;</li>
					<li className="px-6 py-2 border-b border-gray-200 w-full">Certification on MySQL course (Certifier: MicroDegree).</li>
					<li className="px-6 py-2 border-b border-gray-200 w-full">Data Visualization: Kagle</li>
					<li className="px-6 py-2 border-b border-gray-200 w-full">Microsoft Power BI: Passed LinkedIn Skill AssessmentPassed LinkedIn Skill Assessment</li>
					<li className="px-6 py-2 w-full rounded-b-lg">MySQL: Passed LinkedIn Skill AssessmentPassed LinkedIn Skill Assessment</li>
				</ul>
			

				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://www.linkedin.com/in/sreeraksha-m-r-179373159/' className='underline' >
						More Informations
					</a>
				</p>
			</div>
		</Section>
	</Page>
)

export default Accomplishment
