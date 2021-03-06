! function() {
    const e = document.documentElement;
    if (e.classList.remove("no-js"), e.classList.add("js"), document.body.classList.contains("has-animations")) {
        const e = window.sr = ScrollReveal();
        e.reveal(".hero-title, .hero-paragraph, .hero-cta", {
            delay: 150,
            duration: 1e3,
            distance: "60px",
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            origin: "bottom",
            interval: 150
        }), e.reveal(".hero-right-decoration", {
            duration: 1e3,
            distance: "40px",
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            origin: "top"
        }), e.reveal(".hero-left-decoration", {
            duration: 1e3,
            distance: "40px",
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            origin: "bottom"
        }), e.reveal(".clients li", {
            delay: 300,
            duration: 1e3,
            rotate: {
                y: 50
            },
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            interval: 150
        }), e.reveal(".feature, .tabs-links li, .testimonial, .pricing-table, .pricing-faqs, .cta-inner", {
            duration: 600,
            distance: "40px",
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            interval: 100,
            origin: "bottom",
            viewFactor: .2
        })
    }
    const t = document.getElementsByClassName("accordion-title");
    if (t.length)
        for (let e = 0; e < t.length; e++) t[e].addEventListener("click", function() {
            this.parentNode.classList.toggle("is-open");
            const e = this.nextElementSibling;
            e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = `${e.scrollHeight}px`
        });
    const i = document.getElementsByClassName("tab-link");
    if (i.length)
        for (let e = 0; e < i.length; e++) i[e].addEventListener("click", function(t) {
            t.preventDefault();
            let n = i[e].parentNode.parentNode,
                a = n.nextElementSibling.getElementsByClassName("tab-panel"),
                s = n.getElementsByClassName("tab-link");
            for (let e = 0; e < s.length; e++) s[e].classList.remove("is-active");
            for (let e = 0; e < a.length; e++) a[e].classList.remove("is-active");
            let l = this.getAttribute("href");
            i[e].classList.add("is-active"), document.querySelector(l).classList.add("is-active")
        })
}();