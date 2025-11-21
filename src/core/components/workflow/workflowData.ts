export interface WorkflowItem {
  title: string
  description: string
  icon: string
  reverse?: boolean
}

export const workflowData: WorkflowItem[] = [
  {
    title: '1️⃣ Analyze requirements',
    description: 'I study the task, project goals, and client expectations.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png',
  },
  {
    title: '2️⃣ Plan structure',
    description: 'I think through the logic, components, page structure, and code reuse.',
    icon: 'https://cdn-icons-png.flaticon.com/512/8637/8637123.png',
    reverse: true,
  },
  {
    title: '3️⃣ Develop UI',
    description: 'I create clean, responsive, and fast interfaces using modern technologies.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  },
  {
    title: '4️⃣ Animate & polish',
    description: 'I add smooth animations, transitions, and interactivity (Framer Motion, GSAP).',
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712139.png',
    reverse: true,
  },
  {
    title: '5️⃣ Test & deploy',
    description: 'I check behavior on different devices, optimize performance, and deploy.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3845/3845805.png',
  },
]
