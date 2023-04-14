import { type DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
        <path d="M11.683 12.317l5.759 -5.759" />
        <circle cx="5.5" cy="5.5" r="1.5" />
        <circle cx="18.5" cy="5.5" r="1.5" />
        <circle cx="18.5" cy="18.5" r="1.5" />
        <circle cx="8.5" cy="15.5" r="4.5" />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Covid-19 Insights
      </span>
    </>
  ),
  logoLink: '/',
  project: {
    link: 'https://github.com/rwietter/covid-19-insights',
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256">
        <path fill="currentColor" d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z">
        </path>
      </svg>
    )
  },
  banner: {
    key: '1.0-release',
    text: <a href="/" target="_blank">
      🎉 Welcome to Covid-19 Insights
    </a>,
  },
  footer: {
    text: <span>
      Apache License {new Date().getFullYear()} © <a href="https://github.com/rwietter/covid-19-insights" target="_blank">Covid-19 Insights</a>.
    </span>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Covid-19 Insights'
    }
  },
}

export default config
