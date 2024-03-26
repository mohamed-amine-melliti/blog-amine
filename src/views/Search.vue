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
                        <a href="https://fas.org/publications-archive/?tt=nuclear-notebook"
                            class="search-page__category-term">
                            Nuclear Notebook </a>
                        <a href="https://fas.org/publications-archive/?tt=artificial-intelligence"
                            class="search-page__category-term">
                            Artificial Intelligence </a>
                        <a href="https://fas.org/publications-archive/?tt=extreme-heat"
                            class="search-page__category-term">
                            extreme heat </a>
                        <a href="https://fas.org/publications-archive/?tt=bioeconomy"
                            class="search-page__category-term">
                            Bioeconomy </a>
                        <a href="https://fas.org/publications-archive/?tt=clean-energy"
                            class="search-page__category-term">
                            Clean Energy </a>
                    </div>
                </div>
                <div class="search-page__category">
                    <div class="search-page__category-title">
                        issues </div>
                    <div class="search-page__category-tags">
                        <a href="https://fas.org/publications-archive/?i=21" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--tech)">
                            Technology &#038; Innovation </a>
                        <a href="https://fas.org/publications-archive/?i=19" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--social)">
                            Social Innovation </a>
                        <a href="https://fas.org/publications-archive/?i=17" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--science)">
                            Science Policy </a>
                        <a href="https://fas.org/publications-archive/?i=15" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--national)">
                            Nuclear Weapons </a>
                        <a href="https://fas.org/publications-archive/?i=13" class="search-page__category-tags-issue"
                            style="--issue-color: var(--color--regional)">
                            Ecosystems &amp; Entrepreneurship </a>

                        <a href="https://fas.org/publications-archive/?i=day-one"
                            class="search-page__category-tags-issue" style="--issue-color: var(--color--black)">
                            Day One Project </a>
                    </div>
                </div>
                <div class="search-page__category">
                    <div class="search-page__category-title">
                        types </div>
                    <div class="search-page__category-tags">
                        <a href="https://fas.org/publications-archive/?pt=article"
                            class="search-page__category-tags-type">
                            Article </a>
                        <a href="https://fas.org/publications-archive/?pt=blog" class="search-page__category-tags-type">
                            Blog </a>
                        <a href="https://fas.org/publications-archive/?pt=issue-brief"
                            class="search-page__category-tags-type">
                            Issue Brief </a>
                        <a href="https://fas.org/publications-archive/?pt=policies"
                            class="search-page__category-tags-type">
                            Policy Memo </a>
                        <a href="https://fas.org/publications-archive/?pt=press-release"
                            class="search-page__category-tags-type">
                            Press release </a>
                        <a href="https://fas.org/publications-archive/?pt=report"
                            class="search-page__category-tags-type">
                            Report </a>
                    </div>
                </div>
            </div>
        </div>

    </main>



</template>
