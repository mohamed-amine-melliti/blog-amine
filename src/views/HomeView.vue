<!-- eslint-disable prettier/prettier -->
<template>


  <main class="site-main">
    <div class="home-page__hero">
      <div class="home-page__hero-image">
        <img src="@/assets/logoPng.png" srcset="
              @/assets/logoPng.png 402w,
              @/assets/logoPng.png 462w,
              @/assets/logoPng.png 662w,
              @/assets/logoPng.png 722w
            " sizes="100vw, (min-width: 720px) 50vw" alt="" />
      </div>
      <div class="home-page__hero-text">
        <h1 class="home-page__hero-title">
          The art of Engineering <strong>since 2024.</strong>
        </h1>
        <div class="home-page__hero-content">
          <p>
            Welcome To My Blog where You can find shared knowledge of A.I , Full Stack developpement , 3D web ,
            Cybersecurity articles .
          </p>
        </div>

        <RouterLink to="/aboutMe"> <svg width="11" height="9" viewBox="0 0 11 9" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z" fill="#255979" />
          </svg><span>Read more About Me</span></RouterLink>

      </div>
    </div>

    <div class="block-content-grid">
      <section
        class="block block--full-width content-listing content-listing--post-type-publications content-listing--featured">
        <div class="content-listing__inner">
          <header class="block-header">
            <div class="block-header__heading">
              <div class="block-header__heading-title">
                Featured Publication
              </div>
            </div>
            <a class="block-header__link">
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z" fill="#255979" />
              </svg><span>See all</span>
              <span class="block-header__link-title"></span>
            </a>
          </header>

          <div class="content-listing__featured" style="
                --issue-color: var(--color--national);
                --issue-font-color: var(--color--offwhite);
              ">
            <div class="content-listing__featured-image">
              <img decoding="async" src="https://pbs.twimg.com/media/GLhyVUaaYAAUtlg?format=jpg&name=900x900" srcset="
                  https://pbs.twimg.com/media/GLhyVUaaYAAUtlg?format=jpg&name=900x900   402w, 
                  https://pbs.twimg.com/media/GLhyVUaaYAAUtlg?format=jpg&name=900x900  462w,
                  https://pbs.twimg.com/media/GLhyVUaaYAAUtlg?format=jpg&name=900x900   662w,
                  https://pbs.twimg.com/media/GLhyVUaaYAAUtlg?format=jpg&name=900x900   722w,
                  https://pbs.twimg.com/media/GLhyVUaaYAAUtlg?format=jpg&name=900x900  982w,
                  https://pbs.twimg.com/media/GLhyVUaaYAAUtlg?format=jpg&name=900x900  1032w"
                sizes="100vw, (min-width: 720px) 50vw"
                alt="Satellite images show that the Navy has begun construction of a new nuclear weapons storage and handling facility at Barksdale Air Force Base in Louisiana." />
              <div class="content-listing__featured-image-overlay"></div>
            </div>
            <div class="content-listing__featured-post">
              <a class="archive-post" style="
                    --issue-color: var(--color--national);
                    --issue-font-color: var(--color--offwhite);
                  " data-post-id="28653">
                <div class="archive-post__issue">
                  <div class="archive-post__issue-title">Artificial Intelligence</div>
                </div>

                <div class="archive-post__types">
                  <div class="archive-post__types-item">Blog</div>
                </div>

                <div class="archive-post__body">
                  <div class="archive-post__body-title">
                    First AI-Human Air Combat
                  </div>
                  <div class="archive-post__body-content archive-post__body-content--has-excerpt">
                    <p>
                      The U.S. Air Force has confirmed the success of the first air combat between an artificial
                      intelligence (AI)-powered aircraft and a human pilot
                    </p>
                  </div>
                </div>

                <div class="archive-post__details">
                  <span>02.20.24</span>
                  <span>|</span>
                  <span>3 min read</span>
                </div>

                <div class="archive-post__link">
                  <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z"
                      fill="#255979" />
                  </svg><span>read more</span>
                </div>

                <div class="archive-post__hover-background"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- <section
        class="block block--full-width content-listing content-listing--post-type-publications content-listing--grid">
        <div class="content-listing__inner">
          <header class="block-header">
            <div class="block-header__heading">
              <div class="block-header__heading-title">Latest</div>
            </div>
            <a class="block-header__link" href="/articles">
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z" fill="#255979" />
              </svg><span>See all</span>
              <span class="block-header__link-title"></span>
            </a>
          </header>
          <div class="content-listing__grid">
            <a class="archive-post" style="
                  --issue-color: var(--color--tech);
                  --issue-font-color: var(--color--offwhite);
                " data-post-id="28787">
              <div class="archive-post__issue">
                <div class="archive-post__issue-title">
                  Technology &#038; Innovation
                </div>
              </div>

              <div class="archive-post__types">
                <div class="archive-post__types-item">Blog</div>
              </div>

              <div class="archive-post__body">
                <div class="archive-post__body-title">
                  Dr. Hannah Schlaerth, Office of Clean Energy Demonstrations,
                  Clearing the Air with the Clean Energy Corps
                </div>
                <div class="archive-post__body-content archive-post__body-content--has-excerpt">
                  <p>
                    Despite the uphill battle the country is facing, Dr.
                    Schlaerth feels optimistic about the future possibilities
                    of industrial decarbonization.
                  </p>
                </div>
              </div>

              <div class="archive-post__details">
                <span>02.27.24</span>
                <span>|</span>
                <span>5 min read</span>
              </div>

              <div class="archive-post__link">
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z" fill="#255979" />
                </svg><span>read more</span>
              </div>

              <div class="archive-post__hover-background"></div>
            </a>
            <a href="" class="archive-post" style="
                  --issue-color: var(--color--social);
                  --issue-font-color: var(--color--black);
                " data-post-id="28573">
              <div class="archive-post__issue is-day-one">
                <div class="archive-post__issue-title">Social Innovation</div>
                <div class="archive-post__issue-day-one">day one project</div>
              </div>

              <div class="archive-post__types">
                <div class="archive-post__types-item">Policy Memo</div>
              </div>

              <div class="archive-post__body">
                <div class="archive-post__body-title">
                  The Supply-Side Tax Credit: A National Incentive to Reduce
                  the Cost of Affordable Housing
                </div>
                <div class="archive-post__body-content archive-post__body-content--has-excerpt">
                  <p>
                    A supply-side tax credit (STC) could offer a tax incentive
                    to material suppliers and professional service consultants
                    that provide goods or services to affordable housing
                    projects.
                  </p>
                </div>
              </div>

              <div class="archive-post__details">
                <span>02.23.24</span>
                <span>|</span>
                <span>4 min read</span>
              </div>

              <div class="archive-post__link">
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z" fill="#255979" />
                </svg><span>read more</span>
              </div>

              <div class="archive-post__hover-background"></div>
            </a>
            <a href=""
              class="archive-post" style="
                  --issue-color: var(--color--social);
                  --issue-font-color: var(--color--black);
                " data-post-id="28454">
              <div class="archive-post__issue is-day-one">
                <div class="archive-post__issue-title">Social Innovation</div>
                <div class="archive-post__issue-day-one">day one project</div>
              </div>

              <div class="archive-post__types">
                <div class="archive-post__types-item">Policy Memo</div>
              </div>

              <div class="archive-post__body">
                <div class="archive-post__body-title">
                  Develop a Housing Production Dashboard to Aid Policymaking
                  and Research
                </div>
                <div class="archive-post__body-content archive-post__body-content--has-excerpt">
                  <p>
                    The Department of Housing and Urban Development (HUD),
                    Department of Commerce, and Department of Transportation
                    should jointly develop and manage a data resource—a
                    Housing Production Dashboard—to track housing production
                    within and across states.
                  </p>
                </div>
              </div>

              <div class="archive-post__details">
                <span>02.23.24</span>
                <span>|</span>
                <span>3 min read</span>
              </div>

              <div class="archive-post__link">
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z" fill="#255979" />
                </svg><span>read more</span>
              </div>

              <div class="archive-post__hover-background"></div>
            </a>
            <a href="" class="archive-post"
              style="
                  --issue-color: var(--color--social);
                  --issue-font-color: var(--color--black);
                " data-post-id="28448">
              <div class="archive-post__issue is-day-one">
                <div class="archive-post__issue-title">Social Innovation</div>
                <div class="archive-post__issue-day-one">day one project</div>
              </div>

              <div class="archive-post__types">
                <div class="archive-post__types-item">Policy Memo</div>
              </div>

              <div class="archive-post__body">
                <div class="archive-post__body-title">
                  Exempt Affordable Housing from Private Activity Bond Volume
                  Cap
                </div>
                <div class="archive-post__body-content archive-post__body-content--has-excerpt">
                  <p>
                    Exempting affordable housing from volume caps would
                    address the underlying issue and have the greatest impact
                    in this housing emergency.
                  </p>
                </div>
              </div>

              <div class="archive-post__details">
                <span>02.23.24</span>
                <span>|</span>
                <span>7 min read</span>
              </div>

              <div class="archive-post__link">
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z" fill="#255979" />
                </svg><span>read more</span>
              </div>

              <div class="archive-post__hover-background"></div>
            </a>
          </div>
        </div>
      </section> -->

      <section class="block block--full-width issue-listing">
        <div class="issue-listing__inner">
          <header class="block-header">
            <div class="block-header__heading">
              <div class="block-header__heading-subtitle">issues</div>
            </div>
          </header>
          <div class="issue-listing__grid issue-listing__grid--image-card">
            <!-- <a href="/ai" class="listing-card listing-card--short-image" style="
                  --issue-color: var(--color--social);
                  --issue-font-color: var(--color--black);
                ">
              <div class="issue-listing__image listing-card__image">
                <img decoding="async"
                  src="https://fas.org/wp-content/uploads/2023/02/kenny-eliason-zFSo6bnZJTw-unsplash-scaled.jpg" srcset="
                      https://fas.org/wp-content/uploads/2023/02/kenny-eliason-zFSo6bnZJTw-unsplash-402x250.jpg    402w,
                      https://fas.org/wp-content/uploads/2023/02/kenny-eliason-zFSo6bnZJTw-unsplash-462x288.jpg    462w,
                      https://fas.org/wp-content/uploads/2023/02/kenny-eliason-zFSo6bnZJTw-unsplash-662x412.jpg    662w,
                      https://fas.org/wp-content/uploads/2023/02/kenny-eliason-zFSo6bnZJTw-unsplash-722x449.jpg    722w,
                      https://fas.org/wp-content/uploads/2023/02/kenny-eliason-zFSo6bnZJTw-unsplash-982x611.jpg    982w,
                      https://fas.org/wp-content/uploads/2023/02/kenny-eliason-zFSo6bnZJTw-unsplash-1032x642.jpg  1032w,
                      https://fas.org/wp-content/uploads/2023/02/kenny-eliason-zFSo6bnZJTw-unsplash-1402x873.jpg  1402w,
                      https://fas.org/wp-content/uploads/2023/02/kenny-eliason-zFSo6bnZJTw-unsplash-1702x1059.jpg 1702w,
                      https://fas.org/wp-content/uploads/2023/02/kenny-eliason-zFSo6bnZJTw-unsplash-2002x1246.jpg 2002w
                    " sizes="100vw, (min-width: 720px) 50vw" alt="" />
                <div class="listing-card__image-overlay"></div>
              </div>
              <div class="listing-card__body">
                <div class="archive-post">
                  <div class="archive-post__issue">
                    <div class="archive-post__issue-title">
                      Social Innovation
                    </div>
                  </div>
                  <div class="archive-post__body">
                    <div class="archive-post__body-content archive-post__body-content--has-excerpt">
                      American society is grappling with inequalities in
                      education, housing, workforce development, and more, but
                      a fair government can ensure everyone prospers while
                      leaving nobody behind.
                    </div>
                  </div>
                  <div class="archive-post__link">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z"
                        fill="#255979" />
                    </svg><span>view issue</span>
                  </div>
                  <div class="archive-post__hover-background"></div>
                </div>
              </div>
            </a> -->
            <a href="/algorthims-frank-stajano" class="listing-card listing-card--short-image" style="
                  --issue-color: var(--color--science);
                  --issue-font-color: var(--color--offwhite);
                ">
              <div class="issue-listing__image listing-card__image">
                <img decoding="async"
                  src="https://fas.org/wp-content/uploads/2023/02/chuttersnap-UmncJq4KPcA-unsplash-scaled.jpg" srcset="
                      https://fas.org/wp-content/uploads/2023/02/chuttersnap-UmncJq4KPcA-unsplash-402x268.jpg    402w,
                      https://fas.org/wp-content/uploads/2023/02/chuttersnap-UmncJq4KPcA-unsplash-462x308.jpg    462w,
                      https://fas.org/wp-content/uploads/2023/02/chuttersnap-UmncJq4KPcA-unsplash-662x442.jpg    662w,
                      https://fas.org/wp-content/uploads/2023/02/chuttersnap-UmncJq4KPcA-unsplash-722x482.jpg    722w,
                      https://fas.org/wp-content/uploads/2023/02/chuttersnap-UmncJq4KPcA-unsplash-982x656.jpg    982w,
                      https://fas.org/wp-content/uploads/2023/02/chuttersnap-UmncJq4KPcA-unsplash-1032x689.jpg  1032w,
                      https://fas.org/wp-content/uploads/2023/02/chuttersnap-UmncJq4KPcA-unsplash-1402x936.jpg  1402w,
                      https://fas.org/wp-content/uploads/2023/02/chuttersnap-UmncJq4KPcA-unsplash-1702x1136.jpg 1702w,
                      https://fas.org/wp-content/uploads/2023/02/chuttersnap-UmncJq4KPcA-unsplash-2002x1336.jpg 2002w
                    " sizes="100vw, (min-width: 720px) 50vw" alt="" />
                <div class="listing-card__image-overlay"></div>
              </div>
              <div class="listing-card__body">
                <div class="archive-post">
                  <div class="archive-post__issue">
                    <div class="archive-post__issue-title">
                      Algorithms
                    </div>
                  </div>
                  <div class="archive-post__body">
                    <div class="archive-post__body-content archive-post__body-content--has-excerpt">
                      الخوارزمية هي وصف منهجي لحل مشكلة ما. من خلال كلمة "منهجي" نعني أن المشكلة التي يتم حلها يجب أن
                      تحدد بدقة متناهية

                      <br>
                      <br>
                      ملخص
                      <br>

                      -- Algorithms --
                      Professor Frank Stajano
                    </div>
                  </div>
                  <div class="archive-post__link">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z"
                        fill="#255979" />
                    </svg><span>view issue</span>
                  </div>
                  <div class="archive-post__hover-background"></div>
                </div>
              </div>
            </a>
            <a href="/back" class="listing-card listing-card--short-image" style="
                  --issue-color: var(--color--national);
                  --issue-font-color: var(--color--offwhite);
                ">
              <div class="issue-listing__image listing-card__image">
                <img decoding="async" src="https://fas.org/wp-content/uploads/2023/02/missile-silo.webp" srcset="
                      https://fas.org/wp-content/uploads/2023/02/missile-silo-402x201.webp   402w,
                      https://fas.org/wp-content/uploads/2023/02/missile-silo-462x231.webp   462w,
                      https://fas.org/wp-content/uploads/2023/02/missile-silo-662x331.webp   662w,
                      https://fas.org/wp-content/uploads/2023/02/missile-silo-722x361.webp   722w,
                      https://fas.org/wp-content/uploads/2023/02/missile-silo-982x491.webp   982w,
                      https://fas.org/wp-content/uploads/2023/02/missile-silo-1032x516.webp 1032w,
                      https://fas.org/wp-content/uploads/2023/02/missile-silo-1402x701.webp 1402w
                    " sizes="100vw, (min-width: 720px) 50vw" alt="" />
                <div class="listing-card__image-overlay"></div>
              </div>
              <div class="listing-card__body">
                <div class="archive-post">
                  <div class="archive-post__issue">
                    <div class="archive-post__issue-title">
                      Calculus
                    </div>
                  </div>
                  <div class="archive-post__body">
                    <div class="archive-post__body-content archive-post__body-content--has-excerpt">
                      We provide the public with the best open-source
                      information about the status, trends, and risks of
                      global nuclear weapons arsenals.
                    </div>
                  </div>
                  <div class="archive-post__link">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z"
                        fill="#255979" />
                    </svg><span>view issue</span>
                  </div>
                  <div class="archive-post__hover-background"></div>
                </div>
              </div>
            </a>
            <a href="https://fas.org/issue/ecosystems-entrepreneurship/" class="listing-card listing-card--short-image"
              style="
                  --issue-color: var(--color--regional);
                  --issue-font-color: var(--color--offwhite);
                ">
              <div class="issue-listing__image listing-card__image">
                <img decoding="async"
                  src="https://fas.org/wp-content/uploads/2023/02/issue-ecosystems-entrepreneurs.jpg" srcset="
                      https://fas.org/wp-content/uploads/2023/02/issue-ecosystems-entrepreneurs-402x399.jpg 402w,
                      https://fas.org/wp-content/uploads/2023/02/issue-ecosystems-entrepreneurs-462x459.jpg 462w,
                      https://fas.org/wp-content/uploads/2023/02/issue-ecosystems-entrepreneurs-662x658.jpg 662w,
                      https://fas.org/wp-content/uploads/2023/02/issue-ecosystems-entrepreneurs-722x717.jpg 722w
                    " sizes="100vw, (min-width: 720px) 50vw" alt="ecosystems-entrepreneurs" />
                <div class="listing-card__image-overlay"></div>
              </div>
              <div class="listing-card__body">
                <div class="archive-post">
                  <div class="archive-post__issue">
                    <div class="archive-post__issue-title">
                      Web & Pentesting
                    </div>
                  </div>
                  <div class="archive-post__body">
                    <div class="archive-post__body-content archive-post__body-content--has-excerpt">
                      The federal government is making unprecedented
                      investments into our nation’s innovation ecosystem, but
                      these investments must be rooted in community needs and
                      vision.
                    </div>
                  </div>
                  <div class="archive-post__link">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 5.95025L11 3.12439L-3.57628e-07 1.31174e-07L-2.50304e-07 9L11 5.95025Z"
                        fill="#255979" />
                    </svg><span>view issue</span>
                  </div>
                  <div class="archive-post__hover-background"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>


    </div>
  </main>


</template>
