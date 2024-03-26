
import Logo from './Logo.vue';
<!-- eslint-disable prettier/prettier -->
<template>

    <header class="site-header">
        <div class="site-header__inner">
          <a
            href="https://amine-melliti.com/"
            title="Federation of American Scientists"
            rel="home"
            class="site-header__logo"
          >

          <Logo/>
           
          </a>
  
          <button
            class="site-header__menu-toggle"
            type="button"
            role="button"
            data-gw-main-init='{ "mobile-nav-toggle": {} }'
          >
            <div class="site-header__menu-toggle-view">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="-0.000488281"
                  width="30"
                  height="5.17241"
                  fill="#255979"
                />
                <rect y="12.1714" width="30" height="5.17241" fill="#255979" />
                <rect y="24.3452" width="30" height="5.17241" fill="#255979" />
              </svg>
            </div>
            <div class="site-header__menu-toggle-close">
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.000976562"
                  y="25.54"
                  width="36.105"
                  height="4.89277"
                  transform="rotate(-45 0.000976562 25.54)"
                  fill="#255979"
                />
                <rect
                  x="3.78418"
                  width="36.105"
                  height="4.89277"
                  transform="rotate(45 3.78418 0)"
                  fill="#255979"
                />
              </svg>
            </div>
          </button>
  
          <nav class="site-header__nav site-nav">
            <div
              class="site-nav__mobile"
              data-gw-main-init='{ "main-nav-links--mobile": {} }'
            >
              <ul id="menu-main-navigation" class="site-nav__menu">
                <li
                  id="menu-item-8"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8"
                >
                  <a href="#">Concerns</a>
                  <ul class="sub-menu">
                    <li
                      id="menu-item-35"
                      class="menu-item menu-item-type-post_type menu-item-object-issues menu-item-35"
                    >
                      <a href="https://fas.org/issue/ecosystems-entrepreneurship/"
                        >Front-End</a
                      >
                    </li>
                    <li
                      id="menu-item-36"
                      class="menu-item menu-item-type-post_type menu-item-object-issues menu-item-36"
                    >
                      <a href="https://fas.org/issue/nuclear-weapons/"
                        >Back-End</a
                      >
                    </li>
                    <li
                      id="menu-item-37"
                      class="menu-item menu-item-type-post_type menu-item-object-issues menu-item-37"
                    >
                      <a href="https://fas.org/issue/science-policy/"
                        >Software Architecture</a
                      >
                    </li>
                    <li
                      id="menu-item-38"
                      class="menu-item menu-item-type-post_type menu-item-object-issues menu-item-38"
                    >
                      <a href="https://fas.org/issue/social-innovation/"
                        >Artificial Intelligence</a
                      >
                    </li>
                    <li
                      id="menu-item-39"
                      class="menu-item menu-item-type-post_type menu-item-object-issues menu-item-39"
                    >
                      <a href="https://fas.org/issue/technology-and-innovation/"
                        >Web Pentesting</a
                      >
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-33"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"
                >
                  <a href="https://fas.org/publications/">My Articles</a>
                </li>
                <li
                  id="menu-item-10"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10"
                >
                  <a href="#">Get involved</a>
                  <ul class="sub-menu">
                    <li
                      id="menu-item-1674"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1674"
                    >
                      <a href="https://fas.org/day-one-project/"
                        >Day One Project</a
                      >
                    </li>
                    <li
                      id="menu-item-1829"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1829"
                    >
                      <a href="https://fas.org/talent-hub/">Talent Hub</a>
                    </li>
                    <li
                      id="menu-item-1675"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1675"
                    >
                      <a href="https://fas.org/fiscal-sponsorship/"
                        >Fiscal Sponsorship</a
                      >
                    </li>
                    <li
                      id="menu-item-1686"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1686"
                    >
                      <a href="https://fas.org/ways-to-engage/">Ways to engage</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-45"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45"
                >
                  <a  href="/aboutMe">About</a>
                  <ul class="sub-menu">
                    <li
                      id="menu-item-1673"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1673"
                    >
                    <router-link to="/aboutMe">About</router-link>
                    </li>
                    <li
                      id="menu-item-1671"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1671"
                    >
                      <a
                        href="https://fas.org/diversity-equity-inclusion-and-belonging/"
                        >DEIB</a
                      >
                    </li>
                    <li
                      id="menu-item-17438"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17438"
                    >
                      <a href="https://fas.org/fas-experts/?expert-category=staff"
                        >Staff</a
                      >
                    </li>
                    <li
                      id="menu-item-1312"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1312"
                    >
                      <a href="https://fas.org/careers/">Careers</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-31"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"
                >
                  <a href="https://fas.org/contact/">Contact</a>
                </li>
                <li
                  id="menu-item-32"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"
                >
                  <a href="https://fas.org/donate/">Donate</a>
                </li>
                <li
                  id="menu-item-34"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34"
                >
                  <a href="https://fas.org/search/">Search</a>
                </li>
              </ul>
            </div>
            <div
              class="site-nav__desktop"
              data-gw-main-init='{ "main-nav-links--desktop": {} }'
            >
              <ul id="menu-main-navigation-1" class="site-nav__menu">
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8"
                >
                  <a href="#">Concerns</a>
                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-issues menu-item-35"
                    >
                      <a href="https://fas.org/issue/ecosystems-entrepreneurship/"
                        >Front-End</a
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-issues menu-item-36"
                    >
                      <a href="https://fas.org/issue/nuclear-weapons/"
                        >Back-End</a
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-issues menu-item-37"
                    >
                      <a href="https://fas.org/issue/science-policy/"
                        >Software Architecture</a
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-issues menu-item-38"
                    >
                      <a href="https://fas.org/issue/social-innovation/"
                        >Web Pentesting</a
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-issues menu-item-39"
                    >
                      <a href="https://fas.org/issue/technology-and-innovation/"
                        >Artificial Intelligence</a
                      >
                    </li>
                  </ul>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"
                >
                  <a href="https://fas.org/publications/">My Articles</a>
                </li>
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10"
                >
                  <a href="#">My Projects</a>
                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1674"
                    >
                      <a href="https://fas.org/day-one-project/"
                        >Day One Project</a
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1829"
                    >
                      <a href="https://fas.org/talent-hub/">Talent Hub</a>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1675"
                    >
                      <a href="https://fas.org/fiscal-sponsorship/"
                        >Fiscal Sponsorship</a
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1686"
                    >
                      <a href="https://fas.org/ways-to-engage/">Ways to engage</a>
                    </li>
                  </ul>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-45"
                >
                  <a href="https://fas.org/about-fas/">About</a>
                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1673"
                    >
                    <router-link to="/aboutMe">About</router-link>
                  </li>
                  
                    <li
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17438"
                    >
                      <a href="https://fas.org/fas-experts/?expert-category=staff"
                        >Staff</a
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1312"
                    >
                      <a href="https://fas.org/careers/">Careers</a>
                    </li>
                  </ul>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"
                >
                  <a href="https://fas.org/contact/">Contact</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"
                >
                  <a href="https://fas.org/donate/">Donate</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34"
                >
                  <a href="https://fas.org/search/">Search</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
  
</template>

<script setup>
import Logo from './Logo.vue';
</script>