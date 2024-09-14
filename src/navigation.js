import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Design',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Sistemas',
      links: [
        {
          text: 'Design System',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Portfolio', href: 'www.behance.com/agenciadesign4d', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Serviços',
      links: [
        { text: 'Design', href: '#' },
        { text: 'Desenvolvimento de sistemas', href: '#' },
        { text: 'Cursos e treinamentos', href: '#' },
        { text: 'Nossa equipe', href: '#' },
        { text: 'Casos de sucesso', href: '#' },
        { text: 'Orçamento', href: '#' },
        { text: 'Comunidade', href: '#' },
        { text: 'Acesso Exclusivo para Clientes', href: '#' },
        { text: 'Recursos para downloads', href: '#' },
      ],
    },
    {
      title: 'Plataformas',
      links: [
        { text: 'Material Design', href: '#' },
        { text: 'Design System', href: '#' },
        { text: 'LAJE Branding Ana Couto', href: '#' },
        { text: 'Windows', href: '#' },
        { text: 'Mac - IOs', href: '#' },
        { text: 'Android', href: '#' },
        { text: 'Adobe', href: '#' },
        { text: 'Solidworks', href: '#' },
      ],
    },
    {
      title: 'Suporte',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Comunidade Agência 4D', href: '#' },
        { text: 'Nossos serviços', href: '#' },
        { text: 'Soft Skills', href: '#' },
        { text: 'Status dos serviços', href: '#' },
      ],
    },
    {
      title: 'Companhia',
      links: [
        { text: 'Sobre', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Carreira', href: '#' },
        { text: 'Assessoria de Imprensa', href: '#' },
        { text: 'Acessibilidade e Inclusão', href: '#' },
        { text: 'Impacto Social', href: '#' },
        { text: 'Loja', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termos e Políticas', href: getPermalink('/terms') },
    { text: 'LGPD e Política de Privacidade', href: getPermalink('/lgpd') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Agradecimentos para <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a>.
  `,
};
