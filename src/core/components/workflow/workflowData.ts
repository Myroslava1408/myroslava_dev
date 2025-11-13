export interface WorkflowItem {
  title: string
  description: string
  icon: string
  reverse?: boolean
}

export const workflowData: WorkflowItem[] = [
  {
    title: '1️⃣ Analyze requirements',
    description: 'Вивчаю задачу, цілі проєкту, очікування клієнта.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png',
  },
  {
    title: '2️⃣ Plan structure',
    description: 'Продумую логіку, компоненти, структуру сторінок і реюз коду.',
    icon: 'https://cdn-icons-png.flaticon.com/512/8637/8637123.png',
    reverse: true,
  },
  {
    title: '3️⃣ Develop UI with React / Next.js',
    description: 'Створюю чистий, адаптивний і швидкий інтерфейс із сучасними технологіями.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  },
  {
    title: '4️⃣ Animate & polish',
    description: 'Додаю плавні анімації, переходи та інтерактивність (Framer Motion, GSAP).',
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712139.png',
    reverse: true,
  },
  {
    title: '5️⃣ Test & deploy',
    description:
      'Перевіряю поведінку на різних пристроях, оптимізую продуктивність, деплою на GitHub Pages / Vercel.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3845/3845805.png',
  },
]
