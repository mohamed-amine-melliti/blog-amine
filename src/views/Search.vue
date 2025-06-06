<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable prettier/prettier -->

<template>

    <main class="site-main">


        <div class="search-page">
            <div class="search-page__grid">
                <form class="search-page__form" action="https://fas.org">
                    <input name="s" class="search-page__form-input" placeholder="Enter search term" />
                    <button class="search-page__form-submit" type="submit">
                        Search </button>
                </form>
                <div class="search-page__category">
                    <div class="search-page__category-title">
                        trending terms </div>
                    <div class="search-page__category-terms">
                        <a href="/myarticles?tt=nuclear-notebook" class="search-page__category-term">
                            Web 3D Front-End </a>
                        <a href="/myarticles?tt=artificial-intelligence" class="search-page__category-term">
                            Artificial Intelligence </a>
                        <a href="/myarticles?tt=extreme-heat" class="search-page__category-term">
                            Web Pentesting </a>
                        <a href="/myarticles?tt=bioeconomy" class="search-page__category-term">
                            Software architecture and Algorithms </a>

                    </div>
                </div>
                <div class="search-page__category">
                    <div class="search-page__category-title">
                        issues </div>
                    <div class="search-page__category-tags">
                        <a href="/myarticles?i=21" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--tech)">
                            Front &#038; End </a>
                        <a href="/myarticles?i=19" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--social)">
                            Back End </a>
                        <a href="/myarticles?i=17" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--science)">
                            Software architecture & Algo </a>
                        <a href="/myarticles?i=15" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--national)">
                            Calculus </a>
                        <a href="/myarticles?i=13" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--regional)">
                            Web &amp; Pentesting </a>

                        <a href="/myarticles?i=day-one" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--black)">
                            My projects </a>
                    </div>
                </div>
                <div class="search-page__category">
                    <div class="search-page__category-title">
                        types </div>
                    <div class="search-page__category-tags">
                        <a href="/myarticles" class="search-page__category-tags-type">
                            Article </a>
                        <a href="/myprojects" class="search-page__category-tags-type">
                            Project </a>

                    </div>
                </div>
            </div>
        </div>


    </main>

</template>
