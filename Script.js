let timeline = gsap.timeline();

timeline.from('#Sea', {opacity: 0, duration:2})
        .from('#B1', {duration:.15, yPercent:100, ease:'spring'}, .25)
        .from('#B2', {duration:.15, yPercent:100, ease:'spring'})
        .from('#B3', {duration:.15, yPercent:100, ease:'spring'})
        .from('#B4', {duration:.15, yPercent:100, ease:'spring'})
        .from('#B5', {duration:.15, yPercent:100, ease:'spring'})
        .from('#B6', {duration:.15, yPercent:100, ease:'spring'})
        .from('#Sky', {duration:.27, yPercent:-100, ease:'back'})
        