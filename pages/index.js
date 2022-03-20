import Head from 'next/head'
import Row from '../components/row'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Creating Resilience</title>
        <meta name='description' content='ACEs Consulting' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div
        className='h-screen w-full bg-cover bg-center flex flex-col min-h-screen items-center'
        style={{'background-image': 'url("/1783947416.jpg")'}}
      >
        <h1 className='text-3xl text-center p-8 pt-16'>
          CREATING RESILIENCE
        </h1>
        <paragraph className='text-xl text-center p-8 md:pt-64 pt-96'>
          Our Positive Interactions Will Have a ​Ripple Effect on The World!
        </paragraph>
        <paragraph className='text-xl text-center p-8 pt-16'>
          Contact Cheryl Step:  cstep.cr@gmail.com or call/text (405) 621-9432
        </paragraph>
      </div>

      <div className='w-full flex flex-row justify-center'>
        <h2 className='text-3xl p-8 pt-16'>
          Our Mission: Empowering People to Empower People
        </h2>
      </div>

      <Row>
        <div
          className="text-center md:text-left space-y-8"
        >
          <p className='text-3xl'>
            What is Creating Resilience?
          </p>
          <p>
            Trauma Informed Training and Consulting
          </p>
          <p>
            Creating Resilience exists to train groups of individuals to respond and support people with trauma histories and Adverse Childhood Experiences (ACEs). Creating Resilience uses trauma informed strategies to build safe environments, calm and focus behaviors, and increase competency and executive functions. Research shows that the power of one strong adult relationship is the key ingredient in overcoming adversity. Creating Resilience will foster strong relationships.
          </p>
          <p>
            ​Join me to help our children and families reach their full potential and thrive.
          </p>
          <p>
            ​Our positive interactions will have a ripple effect on the world.
          </p>
        </div>

        <div
          className="text-center md:text-left space-y-8"
        >
          <p>
            image
          </p>
          <p>
            There are many opportunities to build resilience—beginning in early childhood and continuing throughout life—by providing supportive relationships in predictable environments, reducing sources of significant stress, and building a toolkit of adaptive skills.--Center for the Developing Child at Harvard University
          </p>
        </div>
      </Row>

      <Row>
        <div
          className="text-center md:text-left space-y-8"
        >
          <p className='text-3xl'>
            Trainer/Consultant
          </p>
          <p>
            Cheryl Step MS, LPC, NCC, NCSC
          </p>
          <p>
            Cheryl has extensive knowledge regarding ACEs.  She displays expertise when presenting and training agencies' staff about developmental trauma and its effects on the brains and behaviors of children and family systems. She has experience presenting to large groups training multiple lessons that build a foundation for trauma informed care. She also has proficiency consulting with agency leadership and coaching staff to use researched strategies and interventions to increase resilience. Cheryl brings real world experience and stories to her training from her 17 years experience working in public schools as a counselor. ​She is certified in Traumatic Stress Studies by The Trauma Center and Trauma Research Center, is certified in ARC (Attachment, Regulation, Competency) Trauma Treatment for Children and Adolescents, and has completed training with Laura Porter and Dr. Rob Anda of ACE Interface to become a NEAR (Neurobiology, Epigenetics, ACEs, Resilience)Science trainer in Oklahoma.  She is a Licensed Professional Counselor and a Nationally Board Certified Counselor and School Counselor.  She holds a Master's Degree in Counselor Education from Syracuse University.
          </p>
        </div>

        <div
          className="text-center md:text-left space-y-8"
        >
          <p>
            image
          </p>
        </div>
      </Row>

      <Row>
        <div
          className="text-center md:text-left space-y-8"
        >
          <p className='text-3xl'>
            WHAT WILL YOU LEARN?
          </p>
          <p className='text-xl'>
            How to be trauma informed ​and trauma responsive
          </p>
          <p>
            Creating Resilience is designed to educate others to use basic principles to create safe emotional and physical environments, trusting relationships, and collaborative and cooperative groups. Participants in the training will learn to use their trauma lens to build respectful connections with others. After learning some basic brain science, participants will begin to  understand how to respond rather than react to behaviors and interactions in order to have positive connections with others and maintain a consistent, safe environment. ​These principles will be followed by a thorough understanding of self-regulation techniques, competency building, and fostering of a resilient self-identity.
          </p>
        </div>

        <div
          className="text-center md:text-left space-y-8"
        >
          <p>
            image
          </p>
          <p className='text-xl'>
            My Mission
          </p>
          <p>
            My mission is to create a ripple effect in our communities across the U.S. to address developmental trauma and the stresses it puts on children's and families' lives.  l will help agency and school staff create safe places for children, adults and families.  I will assist staff to build strong attachments with families by responding with trauma informed care.  I am empowering people to empower other people. We can all be part of a movement to change the world and truly make it a better place for children and adults to thrive!
          </p>
        </div>
      </Row>
    </div>
  )
}
