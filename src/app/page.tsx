import Image from 'next/image'

export default function Home() {
  return (
    <div className='text-dark font-sans'>
      <header className='z-10 mx-auto flex max-w-6xl items-center justify-between max-md:fixed max-md:w-full max-md:bg-white max-md:pr-6 md:px-6'>
        <Image src='/img/logo2.png' alt='logo' width={150} height={100} />
        <nav className='text-dark/80 hidden gap-8 text-sm md:flex'>
          <a
            href='#about'
            className='hover:text-primary transition-colors duration-300 ease-in-out'
          >
            About
          </a>
          <a
            href='#skills'
            className='hover:text-primary transition-colors duration-300 ease-in-out'
          >
            Skills
          </a>
          <a
            href='#experience'
            className='hover:text-primary transition-colors duration-300 ease-in-out'
          >
            Experience
          </a>
        </nav>
        <a
          href='#contact'
          className='bg-primary hidden rounded-md px-5 py-2 text-sm text-white transition hover:bg-blue-600 md:flex'
        >
          Contact Me
        </a>

        <button
          id='menu-btn'
          className='z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5 md:hidden'
        >
          <span className='bg-dark block h-0.5 w-6 transition-all duration-300'></span>
          <span className='bg-dark block h-0.5 w-6 transition-all duration-300'></span>
          <span className='bg-dark block h-0.5 w-6 transition-all duration-300'></span>
        </button>

        <div
          id='mobile-menu'
          className='text-dark/80 fixed right-[-225px] top-0 z-10 flex h-full w-[225px] flex-col items-center justify-center space-y-6 bg-white text-base shadow-lg transition-all duration-300 md:hidden'
        >
          <a
            href='#about'
            className='hover:text-primary transition-colors duration-300 ease-in-out'
          >
            About
          </a>
          <a
            href='#skills'
            className='hover:text-primary transition-colors duration-300 ease-in-out'
          >
            Skills
          </a>
          <a
            href='#experience'
            className='hover:text-primary transition-colors duration-300 ease-in-out'
          >
            Experience
          </a>
          <a
            href='#contact'
            className='hover:text-primary transition-colors duration-300 ease-in-out'
          >
            Contact Me
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl bg-[url('/img/bg.png')] bg-contain bg-top bg-no-repeat px-6 py-10">
        <section
          className='grid items-center gap-10 max-md:mt-[100px] max-md:scroll-mt-[100px] md:grid-cols-2'
          id='about'
        >
          <div className='w-full max-w-[570px]'>
            <p className='text-muted split-text text-sm'>Hi!</p>
            <h1 className='mt-2 text-4xl font-bold leading-tight md:text-[44px]'>
              <span className='split-text'>I’m </span>
              <span className='text-primary split-text ml-2'>Myroslava</span>,<br />
              <span className='split-text'>a Front-End Developer</span>
            </h1>
            <p className='text-muted mt-4 max-w-md'>
              Based in Lutsk, Ukraine. Focused on performance, scalability, and clean code.
            </p>
          </div>
          <div className='flex justify-center'>
            <Image
              src='/img/me2.png'
              alt='Developer illustration'
              width={400}
              height={400}
              className='rounded-full'
            />
          </div>
        </section>

        <section id='skills' className='mx-auto max-w-6xl px-6 py-14 max-md:scroll-mt-[100px]'>
          <h2 className='text-dark mb-10 text-center text-[35px] font-semibold'>
            Technical <span className='text-primary'>Skills</span>
          </h2>

          <div className='grid gap-6 md:grid-cols-3'>
            {/* Frontend */}
            <div className='rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg'>
              <div className='mb-4 flex justify-center'>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                  alt='React icon'
                  width={64}
                  height={64}
                />
              </div>
              <h3 className='mb-3 text-lg font-semibold'>Frontend</h3>
              <div className='flex flex-wrap justify-center gap-2 text-sm'>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                    alt='React'
                    width={16}
                    height={16}
                  />{' '}
                  React
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                    alt='Next.js'
                    width={16}
                    height={16}
                  />{' '}
                  Next.js
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.brandfetch.io/heroui.com/fallback/lettermark/theme/dark/h/64/w/64/icon'
                    alt='HeroUI'
                    width={16}
                    height={16}
                  />{' '}
                  HeroUI
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.worldvectorlogo.com/logos/radix-ui.svg'
                    alt='Radix UI'
                    width={16}
                    height={16}
                  />{' '}
                  Radix UI
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.worldvectorlogo.com/logos/redux.svg'
                    alt='Redux'
                    width={16}
                    height={16}
                  />{' '}
                  Redux
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image src='/img/zustand.svg' alt='Zustand' width={16} height={16} /> Zustand
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg'
                    alt='jQuery'
                    width={16}
                    height={16}
                  />{' '}
                  jQuery
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://www.svgrepo.com/show/374118/tailwind.svg'
                    alt='Tailwind CSS'
                    width={16}
                    height={16}
                  />{' '}
                  Tailwind
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
                    alt='SASS'
                    width={16}
                    height={16}
                  />{' '}
                  SCSS / SASS
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg'
                    alt='Gulp'
                    width={16}
                    height={16}
                  />{' '}
                  Gulp
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  ⚡ Optimization of page speed
                </span>
              </div>
            </div>

            {/* API & Data */}
            <div className='rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg'>
              <div className='mb-4 flex justify-center'>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
                  alt='GraphQL'
                  width={64}
                  height={64}
                />
              </div>
              <h3 className='mb-3 text-lg font-semibold'>API & Data</h3>
              <div className='flex flex-wrap justify-center gap-2 text-sm'>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
                    alt='GraphQL'
                    width={16}
                    height={16}
                  />{' '}
                  GraphQL
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image src='/img/apollo-client.svg' alt='Apollo Client' width={16} height={16} />{' '}
                  Apollo Client
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image src='/img/tanstack.png' alt='TanStack Query' width={16} height={16} />{' '}
                  TanStack Query
                </span>
              </div>
            </div>

            {/* Tools & Environments */}
            <div className='rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg'>
              <div className='mb-4 flex justify-center'>
                <Image
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                  alt='Docker'
                  width={64}
                  height={64}
                />
              </div>
              <h3 className='mb-3 text-lg font-semibold'>Tools & Environments</h3>
              <div className='flex flex-wrap justify-center gap-2 text-sm'>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
                    alt='Figma'
                    width={16}
                    height={16}
                  />{' '}
                  Figma
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                    alt='Git'
                    width={16}
                    height={16}
                  />{' '}
                  Git / GitHub / GitLab
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                    alt='Docker'
                    width={16}
                    height={16}
                  />{' '}
                  Docker
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg'
                    alt='Ubuntu'
                    width={16}
                    height={16}
                  />{' '}
                  Ubuntu
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg'
                    alt='macOS'
                    width={16}
                    height={16}
                  />{' '}
                  macOS
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1'>
                  <Image
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg'
                    alt='Windows'
                    width={16}
                    height={16}
                  />{' '}
                  Windows
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id='experience' className='mx-auto max-w-6xl px-6 py-14 max-md:scroll-mt-[100px]'>
          <h2 className='text-dark mb-10 text-center text-[35px] font-semibold'>
            My <span className='text-primary'>Experience</span>
          </h2>

          <div className='grid gap-6 md:grid-cols-3'>
            <a
              href='https://lms.beetroot.academy/diploma/clmf2byv1t7y90813qk041hwv'
              target='_blank'
              className='block overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg'
            >
              <Image
                src='/img/certificate.png'
                alt='Certificate'
                width={192}
                height={192}
                className='h-48 w-full object-cover'
              />
              <div className='p-4'>
                <h4 className='text-lg font-semibold'>Frontend Development Course</h4>
                <p className='text-muted mt-1 text-sm'>View Certificate (PDF)</p>
              </div>
            </a>

            <div className='overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg'>
              <Image
                src='https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=600&auto=format&fit=crop&q=60'
                alt='Freelance Work'
                width={192}
                height={192}
                className='h-48 w-full object-cover'
              />
              <div className='p-4'>
                <h4 className='text-lg font-semibold'>Freelance Projects</h4>
                <p className='text-muted mt-1 text-sm'>
                  Developed websites for small businesses & personal brands
                </p>
              </div>
            </div>

            <div className='overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg'>
              <Image
                src='https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=600&auto=format&fit=crop&q=60'
                alt='Web Studio Work'
                width={192}
                height={192}
                className='h-48 w-full object-cover'
              />
              <div className='p-4'>
                <h4 className='text-lg font-semibold'>Web Studio Developer</h4>
                <p className='text-muted mt-1 text-sm'>
                  Part of a team creating landing pages and corporate websites
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='workflow' className='mx-auto max-w-6xl px-6 py-20'>
          <h2 className='mb-16 text-center text-3xl font-bold md:text-4xl'>
            🧠 My <span className='text-primary'>Workflow</span> / How I Work
          </h2>

          <div className='border-primary/40 relative space-y-16 border-l-2 pl-8'>
            <div className='group flex flex-col items-center gap-8 md:flex-row'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/1048/1048953.png'
                alt='Analyze requirements'
                width={96}
                height={96}
                className='h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105'
              />
              <div>
                <h3 className='text-primary mb-2 text-xl font-semibold'>1️⃣ Analyze requirements</h3>
                <p className='text-dark/80'>Вивчаю задачу, цілі проєкту, очікування клієнта.</p>
              </div>
            </div>

            <div className='group flex flex-col items-center gap-8 md:flex-row-reverse'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/8637/8637123.png'
                alt='Plan structure'
                width={96}
                height={96}
                className='h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105'
              />
              <div className='text-right md:text-left'>
                <h3 className='text-primary mb-2 text-xl font-semibold'>2️⃣ Plan structure</h3>
                <p className='text-dark/80'>
                  Продумую логіку, компоненти, структуру сторінок і реюз коду.
                </p>
              </div>
            </div>

            <div className='group flex flex-col items-center gap-8 md:flex-row'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
                alt='Develop UI'
                width={96}
                height={96}
                className='h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105'
              />
              <div>
                <h3 className='text-primary mb-2 text-xl font-semibold'>
                  3️⃣ Develop UI with React / Next.js
                </h3>
                <p className='text-dark/80'>
                  Створюю чистий, адаптивний і швидкий інтерфейс із сучасними технологіями.
                </p>
              </div>
            </div>

            <div className='group flex flex-col items-center gap-8 md:flex-row-reverse'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/4712/4712139.png'
                alt='Animate and polish'
                width={96}
                height={96}
                className='h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105'
              />
              <div className='text-right md:text-left'>
                <h3 className='text-primary mb-2 text-xl font-semibold'>4️⃣ Animate & polish</h3>
                <p className='text-dark/80'>
                  Додаю плавні анімації, переходи та інтерактивність (Framer Motion, GSAP).
                </p>
              </div>
            </div>

            <div className='group flex flex-col items-center gap-8 md:flex-row'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/3845/3845805.png'
                alt='Test and deploy'
                width={96}
                height={96}
                className='h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105'
              />
              <div>
                <h3 className='text-primary mb-2 text-xl font-semibold'>5️⃣ Test & deploy</h3>
                <p className='text-dark/80'>
                  Перевіряю поведінку на різних пристроях, оптимізую продуктивність, деплою на
                  GitHub Pages / Vercel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id='contact'
          className='md: mx-auto max-w-6xl px-6 py-14 text-center max-md:scroll-mt-[100px]'
        >
          <h2 className='text-dark mb-10 text-[35px] font-semibold'>
            Contact <span className='text-primary'>Me</span>
          </h2>
          <div className='max-laptop:flex-col flex w-full flex-row flex-wrap justify-center gap-10 md:justify-between'>
            <a
              href='https://github.com/Myroslava1408'
              className='flex flex-col items-center transition hover:opacity-80'
            >
              <div className='relative h-[160px] w-[166px]'>
                <div className='absolute'>
                  <svg id='wave' width='166' height='160' viewBox='0 0 166 160' fill='none'>
                    <path
                      id='wavePath'
                      fill='#608AF5'
                      d='M85.7852 0.0360206C101.496 -0.682995 115.271 9.49381 128.538 18.7928C142.692 28.7146 159.881 37.6645 164.714 55.3621C169.527 72.985 159.777 90.8774 152.791 107.595C146.594 122.426 138.989 136.503 126.876 145.912C114.885 155.225 100.348 161.615 85.7852 159.641C71.9985 157.773 63.7442 142.784 51.4371 135.689C35.8671 126.713 13.2706 129.457 4.4181 112.735C-4.44637 95.9896 1.49371 73.5911 9.39468 56.2707C16.6576 40.3489 32.0889 32.492 45.5382 22.5914C58.3669 13.1476 70.3688 0.741563 85.7852 0.0360206Z'
                    />
                  </svg>
                </div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <Image src='/img/github.svg' width={100} height={100} alt='icon' />
                </div>
              </div>
              <span className='mt-2 text-xl font-medium'>Github</span>
            </a>
            <a
              href='https://www.instagram.com/myroslava__oleksandrivna/'
              className='flex flex-col items-center transition hover:opacity-80'
            >
              <div className='relative h-[160px] w-[166px]'>
                <div className='absolute'>
                  <svg id='wave' width='166' height='160' viewBox='0 0 166 160' fill='none'>
                    <path
                      id='wavePath'
                      fill='#608AF5'
                      d='M85.7852 0.0360206C101.496 -0.682995 115.271 9.49381 128.538 18.7928C142.692 28.7146 159.881 37.6645 164.714 55.3621C169.527 72.985 159.777 90.8774 152.791 107.595C146.594 122.426 138.989 136.503 126.876 145.912C114.885 155.225 100.348 161.615 85.7852 159.641C71.9985 157.773 63.7442 142.784 51.4371 135.689C35.8671 126.713 13.2706 129.457 4.4181 112.735C-4.44637 95.9896 1.49371 73.5911 9.39468 56.2707C16.6576 40.3489 32.0889 32.492 45.5382 22.5914C58.3669 13.1476 70.3688 0.741563 85.7852 0.0360206Z'
                    />
                  </svg>
                </div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <Image src='/img/instagram.svg' width={100} height={100} alt='icon' />
                </div>
              </div>
              <span className='mt-2 text-xl font-medium'>Instagram</span>
            </a>
            <a
              href='https://t.me/myroslava1408'
              className='flex flex-col items-center transition hover:opacity-80'
            >
              <div className='relative h-[160px] w-[166px]'>
                <div className='absolute'>
                  <svg id='wave' width='166' height='160' viewBox='0 0 166 160' fill='none'>
                    <path
                      id='wavePath'
                      fill='#608AF5'
                      d='M85.7852 0.0360206C101.496 -0.682995 115.271 9.49381 128.538 18.7928C142.692 28.7146 159.881 37.6645 164.714 55.3621C169.527 72.985 159.777 90.8774 152.791 107.595C146.594 122.426 138.989 136.503 126.876 145.912C114.885 155.225 100.348 161.615 85.7852 159.641C71.9985 157.773 63.7442 142.784 51.4371 135.689C35.8671 126.713 13.2706 129.457 4.4181 112.735C-4.44637 95.9896 1.49371 73.5911 9.39468 56.2707C16.6576 40.3489 32.0889 32.492 45.5382 22.5914C58.3669 13.1476 70.3688 0.741563 85.7852 0.0360206Z'
                    />
                  </svg>
                </div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <Image src='/img/telegram.svg' width={100} height={100} alt='icon' />
                </div>
              </div>
              <span className='mt-2 text-xl font-medium'>Telegram</span>
            </a>
            <a
              href='mailto:miroslavaacuk475@gmail.com'
              className='flex flex-col items-center transition hover:opacity-80'
            >
              <div className='relative h-[160px] w-[166px]'>
                <div className='absolute'>
                  <svg id='wave' width='166' height='160' viewBox='0 0 166 160' fill='none'>
                    <path
                      id='wavePath'
                      fill='#608AF5'
                      d='M85.7852 0.0360206C101.496 -0.682995 115.271 9.49381 128.538 18.7928C142.692 28.7146 159.881 37.6645 164.714 55.3621C169.527 72.985 159.777 90.8774 152.791 107.595C146.594 122.426 138.989 136.503 126.876 145.912C114.885 155.225 100.348 161.615 85.7852 159.641C71.9985 157.773 63.7442 142.784 51.4371 135.689C35.8671 126.713 13.2706 129.457 4.4181 112.735C-4.44637 95.9896 1.49371 73.5911 9.39468 56.2707C16.6576 40.3489 32.0889 32.492 45.5382 22.5914C58.3669 13.1476 70.3688 0.741563 85.7852 0.0360206Z'
                    />
                  </svg>
                </div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <Image src='/img/fast_message.svg' width={100} height={100} alt='icon' />
                </div>
              </div>
              <span className='mt-2 text-xl font-medium'>Email</span>
            </a>
          </div>
        </section>
      </main>

      <footer className='relative flex h-[86px] w-full items-end justify-center overflow-hidden py-6 text-center text-sm text-white md:mt-10 md:h-[320px]'>
        <div className="absolute inset-0 bg-[url('/img/bg-footer.png')] bg-[length:100%_auto] bg-center bg-no-repeat"></div>
        <p className='relative z-10 mb-[-24px] text-[12px] md:mb-5 md:mb-[-12px] md:text-[20px]'>
          Developed By Myroslava Yatsuk
        </p>
      </footer>
    </div>
  )
}
