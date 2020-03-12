export default class TaskService {

    // data = [
    //     {
    //         id: 1,
    //         title: 'Learn REACT',
    //         text: 'Необходимо выучить REACT в кратчайшие строки',
    //         imgSrc: 'data:image/jpeg;base64,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',
    //         priority: 'normal',
    //         done: false,
    //         open: false
    //     },
    //     {
    //         id: 2,
    //         title: 'Learn REDUX',
    //         text: 'Необходимо выучить REDUX в кратчайшие строки',
    //         imgSrc: 'data:image/jpeg;base64,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',
    //         priority: 'normal',
    //         done: false,
    //         open: false
    //     },
    //     {
    //         id: 3,
    //         title: 'Learn REACT',
    //         text: 'Необходимо выучить REACT в кратчайшие строки',
    //         imgSrc: 'data:image/jpeg;base64,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',
    //         priority: 'normal',
    //         done: false,
    //         open: false
    //     },
    //     {
    //         id: 4,
    //         title: 'Learn REDUX',
    //         text: 'Необходимо выучить REDUX в кратчайшие строки',
    //         imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBAQEBIVFRUVEA8QFRYXFRAVFRUQFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQGi0lIB0tLS0tKysrLS0tLS0tLS0tLS0tLSstLSstLSstLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABMEAABAwICBQcIBwMICwAAAAABAAIRAwQSIQUxQVFhEyJxgZGh0QYUMkJSkrHwByNicqLB4RVTgjM0Q2OTo9LxFhckRFRzg7LCw+L/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QALhEBAAICAQMCAwYHAAAAAAAAAAERAhJRAyFBEzEUYbEEBUKBofAVIlJxkdLx/9oADAMBAAIRAxEAPwDpBbIi2WlySIpr816kvv6QzhbI+bLR5NHk09STSGcLZO82WhyaOBTeTWGf5sj5ur+BHAm8prCh5siLdX8KOBN5NYUfN0Rbq9hRwqbyVCiLdOFurmFHCm0pUKYoJwt1bwohqbHZVFBOFBWcKdhTZLhWFFEUVZDUYS0tXFFO5JTgJ0JabK4pI8krGFLClpsg5NEU1PCMJabIeTR5NTQjCWmyHk0cCmhKFbTZFgRwKWEoS02RYEcClhGEtNkWBLApYRhLTZFgRwKRKEs2Y+FHChiSLws09owlCaarRrI2bRt1KOve02TjqMbBg4nNGe7M601kTwlCZTqhwlpBG8EEdoTHXbAcJe0OjFBc2cO+NyayiaEYUIuGnMOG/WNXyCntfIBGYOYKlSHopmJLHsSikiSZKUqUlJEVFKWJKKSohVxWBJAcJGsSJHSE7GlSmqdFZN/p62oYeWr02YvRlwk9AV+lXDgHNIIOogyD1pOMxF0lLCKrvrACXEDUMyBmdWtQUtLUHGG1qTjuFRhO7VKVMszDQRVZ9yxphzmg7iQD2FYGl/LW1oVW0TUa55NI6+YGPJlxcJ1AT1jetY4ZZe0JMOplGVl2Gl6dX0TE1KlNkuYeU5P0nNwk5CD2LP0h5UUaF5St61RjA+nUcCdrgRhE7NT9fBIwymaiEp0spSvMPK36SzTAbaBhDgSKhc152gQwatQOew6gclk0vpfrYWg29MukYiHODSM8g3YfR27CvRj9j62UXEOeWeETUy9mlGV4PpH6U715YWYaQbiyYPSJ1Yi7FkNwhZdTy90k6cVy7NoAAwsAI9YYQDPWusfd/Vn3pznrYPo0Ir5uuvLS+cS8XT2ucWlwa6Gy04mwDJyO2cxA1BNHlpfm4dcC6eKjm4SB/JhsRApnmjfq1q/w/qcwk9bF9KJLwNv0qX2EtJYZYWkwQZiA4Qea7b1nJT2P0s3bHUjUDXsa1wqNjCahgwQ7PDGWob+EY+B6y+phy92SlfP+mfpQvKz6VSkeQLGAFrHFzHPxSXFrhnkGgAzHO1zlztLyjug5rhc1pDi4c92RJkxumTO9bx+7+pMd5pmerg+o0l49o/6ZS2lFe3L6gDQCxzWtc7OS6fR2ZAFRv+meqRzbSm0zrNR7ubugNGfGVy+D63H0XfDl7KjK8bf9MtWMrWnOf9K+IjL1ZmVN/royH+xg5CfryOdGcDkzlKnwfW/p/WDfDl5wNK3YBDbqqAcjFasJHbwCrmpWc3A+q5zZnCajy2Ttw6p4rqORb+7+CBt2fux+HwX2/wAnn7z5cqLV49HKYOs7NWob0XW9Ukg65BObjnEScty6c21P2B2N8EvN6Xs/hb4q7SlOXbbVG5A4eAxDPLWI+YCbUoPJLnHESSTJkkkySSdpO9dS61pHMt7v/pDzCj7I68Xim0mrlvNXbgp6dWu0AMe8AagHuA45Arof2ZR9ln96l+y6Xss/H+YU2talg8rXI/lKmrDHKOjDrw+lqknLiVLRv7pjhUbVqhwBaHYziDTMgGchmVsfsmlub2x8QkdFU+H9ozwU/Je/LHraQvHkF9aq7OZNV53H2stQ7EaelbxkllesCTiJFV4kwBJOKSYAWr+xWbJ/tKfgj+xW7ndTx4J24g/m5ZLdL3n/ABNx1Vqo+DlM7T99gLDc14LcJBquMtiIzOXTrVx+i6QMOfhI1g1Mx0tmQiNGWvr3jGdAuHnugd6axP4f0TeY/F+rnwX4i4OMnWcQnXOee9Ox1JBLySAACX5homADi1Ce9dKywszA8/qHopOA76qu2+jLH1ru4Oc80MGfGXkKzfCXHLhHNcXS4zxLmk796u0r6uxnJsrVGt9ltYtZP3Q6F31roy2Bll5WgzIc2g7rEvAmUq3krbuzbpCoNZ51JsZ7MTXx3qTnzBFeJec1HveCHEkSXc54Mu1E69fFNIdlqyAAzblnOWe9ehnyOqOAFO8Y4jMYjgMfwh2WSfX8kdIawG1Mo+rcx34QyZ6lPUWr8vNn4ySTG4kubmIjPPdkg2g7YB2t8V3BFxRcGVAwOb6tWlDo3ODqUkZKR2kKhdi5O116uSbGz+r4d6u88GvzcXQfUZ6Li2QQcL4yORBg5yMoUXImSeO9vbrXb3t5UeIbTtqeWeGlT17+czJOOkHw0ebWZI1nkaAxdIw/BTeeDX5uEqUXk6u8Jvm793eF3l3eh45tlasO0gUD3EZJaNvGMBFaxtq27+asI6SJlX1J4TT5uD83fu72o+bP4e83xXYaYPKva6ha06DQ2CxvmrwTnnmRGvcs4WVaZwjowW5HZiVjOTRz5tn7h7zfFPZbu4e83xXR07ar+5p9dC3M9hVljXTJtaUTOVuzVuyKbyukORNq7h7zUjbP3Dtb4rpqdq9uuk12Z12/dqVqzc1rXiraMcSCGu83gtdnwzCnqTwmjj/NH7h2t8Uhav8AZ/E3xXbvuaRYB5hSDhMkW7wDu2Ksy4aMM2dEwc5t3ZjjzdaepPC6Ry5B1u/aB7zfFEWz+HaF3d3fWpaQ2wptMAg+bnJ/RHokLOpXbAQXWlAjUfqKmY3+jCR1JnwThHLl/NX7tm9qXmj9w95viu8dpKzwCLGiHQQfqHQDlBHeqdK9o54rO3OeR5OMughT1J4NI5TFrvmUJKvcmPmUuR+cktaUgSli+cvFWzQG4diaaA3DvSylfLgkY4KY243IciOKWIYbw7kQ1qkNAcEBazqbPzwVDCxqQa3f3jxTjQI1iO1OLIbjdkwGMXH2Rvdw+AzQRvAALi4BozJJMAdS53SGlH1HcnQDgOHpu4k+q3h2nYpdLXJqEAZNByaM8zlJj0ncfgmWltzc3YWnIhroJ++7WegZLpjjXeXLLK+0KtPRsCKtQN+y1zRHSSoNIMo0283nOOrnkgcTC0zbUAPRZ2Yj+ZWDUtaj3Oc2mWidURA2a1u5lziIQ21J1R4aNu3PIbSV0VLR7AMnPHun8lnWNB1OebUBOstwatmtT8pc4pAdEj1aeY7U7rKvT0s5pIOwkLSttNn2isutYvJcTSdJJOtgyJmFCbKpsYe1pWrZnGPDpWaZgxMg5EcdYMb9a09G+UFRh5tV42jnEjsP5QuENtVHqO7CU9lw9uuR0gqTESsRMPVqP0hAt5O5DardWGqxrh2n0SjVvdF1iA0+a1HGBiDnUiTshxBB/i6l5nTv2uyeAemCtK3rUsOEsaW64gR2HJYno4+Go6mUOz0hoGvTaagpsq0xmX0sbgBvcJxN6xHFY/LD2B2uVrRHlEaIaKRwYfRw82OoLUdfWtyfr2GnUOfK04Ene5nou7jxXOccodIziWFyjfY/Ef8ACjjb7J95v5hb/wDomSMdO5ouZtcTWBaN72hpw9Orip/9EWgSbth/5dOpU+MLG0NuaFRm5/axOxs/rP7vxWpW0VRb/vLj/wBAD/2Ks6xZ6tdv8bHt/wC3EtJtCqCzfU91v5FHCze73P1Ur9HVRmGh43sh/XAMjrCrYeA7FFS8mz2j7jkAxnt/hePyUY6Pj4J0nd3uRUnJs/eN7x+SQpj96z3v0TMR+T+qWI8e7xQScl/Ws98JwtzsqN6qgUBeePYE0u+cP6ILfm1T2v7z9U7zWrvd758VSgbm9jU0sHss7GeKDSlCUzNLElFnylmo8QSlSizyeCBPBDEd6BclCjpXS7Ldoc5uMkw1hJAceJGcdCzKWln3ROMkOaJDBAYG/YAyA4Kl5Vy6tI1MaMuJBcT3LPsbh1Osx+ZAIzMxnkQT1rrjjUW55Tc06i3vrikZp1Xt6HGOzUlfaWr1Y5V5ceKq6TvnvLeRDW5c7GTr4EbFrWPIYAalRjXEZgPDo61N4jvML6UzNQyRQedkdMD4pwtN7h0NDj8YC3OUtR/SN+KbUvbUZB0yQMg7Vt7pWfW4iWvh55hksot2Mc7pdAnoA/NB1qT6oHQPFbY0ja+1+F/gj+0Lc6njsI+KnrTxK/D/ADhheauGrLoy+CgqFw1k9pW1pHStvTouqBwcdQaN/EblxNTTNdzsQdhE6hqXTDOcvDnn04xmrbrHnYT2lStrO3z0hrviFn6L0kKhwVAA/YRqd+vz0ar6BC3bnOJ1OvTPp0utji09jpB6oVulYW9TKnWDT7NSaZ6jzmntCzixNhEaF15J1Ik0S4bwxtQe/TkLHfoYAwAQdzXGfdd4LTsdJ1qJmm8jhJhdFb+WJeMFwA7Zzmh7e8KXlB2cObZzdp6HCO8eCsW9Co4jBBOyHMn3SZPRC7xtxbvblRpkH2QI6gMgsy70Pbu9Fpb0H8irvyaqmjG3tMgtp1BGogOC2adpVqHEWGnIMkFrQDsc0A5HeBkdcTmcu3tK9H+b3Dmj2Z5vW0yD2LUt9N3gyq27Ko3sGB3dkexYynhqPmz6+kq9JxZWa2q0GJeCZG8PEOHap7V1nXyxm3edlQzTJ4VQMv4gFrs0rQqDDWpVaROx7C5vvbEK/krRqjHRc0ztY4O7QMws7R57LrPjupXHk/WpZ5xrBGYPQ4ZKN7C7+WYH/azD/fGZ65C0dGW99ac2i7HT20nglkcAfR6u9dTa8jcD6y3qUXwJDmksJ+xUAgjpgrOWde/dYx47PO62jCc6Tp+y84XdTvRPXCoVA5pwua5pGw5HsK9Yd5MUTtLemI7dSgufJKmWw6rSLdgech91wMt6QQseri6VLy0PO49yOL5hdJpryTo0s6ekLVs6mVKzJ6GuAk9Eda5RwcCRiBgkcOpaiYn2E+IcOxLEOHeq+N3DtS5Q7lqi1iRwSy3Kvyg3HsR5Ru4pQth/CE5R40MagkI3hDJR40MYVEsIKPlBvQ84G9BzenSeXqAfu2uHTELGqVCBmdYGrVK2dPP+ukaiyJjKYbl2ysG4MldcfZzlvcplKgubwMGeZ2DegA7kw8CRhByLSdW6ZWM/E50n/LgpELOTQN+/gOrxQF4/f3BSss2OEsqgcHAjvEoHRlT1QHZeqQ7uGavY7iy7cdvwVunUO0rN5NzTDgQeIIVmk5SYWJV9L1Jc1mz0j89vaqvKGMgIHCU68dNR53ADuCdZ0HPkNE5LUezM+6MPnnDJzYP6hd7oeu2vRa464g9IXAhuF0HfhPXkVs+TtyWh7QSIcD89crHUi47N9OYvu62raN3LOr0HjUwH+OPi1F2k3xsVWvpN2yB1LjE5u049NFWq1G66J98f4VAb4j0qRA++P8Kiu9JlubnE7gCsarcPqnbA2CY613x28uGUYeG0zTTQea2pP2SPyWjS8pKuy1qu6cf5NWFZXLqbHBznNEy3Nwz25dihfeTrJP3j+sqzEy6YY9HzM3+/7/R1bPKe42WRH3nPHxAQqeVt0P6C3b96pT/N6451cH2ex0/BNDxtc7qn9FnSf3/1Zy6Me0T/AJj/AFdO/wAvb1phvIj7rQ7vkqN3l1pI5isWngxv5hYNOvT9YPI6Y/8AJScrSB/kqZ6X1DPZ4LWmPDjOXfs6IeVN49oNXSdZpiS0Mdkd0y0FUL7T1y6A2+uXjOS6rg6AGte7tnbqEZ0G3rAJDKOz1HuPHJykp6XcPRhv3aFAcNfes6RC7FQuXvdz61SpwFSsT2wZWlSsWEtDqNTZznNfEdNSqz4KjU8o6uytXj7NQU+5rVnU77C9zwHYiZkvJM7STEknek4W64faJwioiPziJ+sPTKXk600HV6FJuJuCS2rQqPLCcJAp02SMyCSXH0dWsrMdRcCQZBGRBAkHiuXsLyvcPDZyGbjmcI6yc109JmEBoyAAA6FjWceyZ57zsBYfkFNw8ApsR4I4uCMoY4IdR71NiCWXzKqKfLbim+cnaqqaXFbpi1o3Kaa5VaUI3K0WmdXKhfXKaeKEJRatctLgRKybig/2esGVulqY5qowml4jI5Jcs/2j1wQtl1IblA+2G5ClAXJ4Hqw/BWaN6MsiD0/5pPswoHWsakKbNvpUjIkkbnAOHerNS4t3tOQY6Mi3FBO4iIHUubAI192X6J3K7u/JZnGFjKYKsyajxwB7gU61uMEESFGanPa7hhPj87lFVEZLcMnPrB0k+kXOJKuaMqfWP4iew/qs1gzAVm1qxUngfnuSfYiW495WZd30ZNzPcEy7vTESorW0c7M5DeQJKxGLc5cK7Wued52lXaFDCNfSVM+2YwS4x2SegBZ9xcl2QybsHidq3bFUdXuJ1Z8fBV8SCSIMpJIwgIbmrPJjcqzCNpT8bftFFWABwScW7wm2tA1DDGTxJMDpK2qfk831qnU1sd5lSZiFju518bFLZWbqrsLR0nYBvK6hmg6I9Selzj+cK9RYGDC1jQNwEfBZnPhdTNH2jKTAxvSTtJ3lWwEwPG5EELDZySHWjmoDKXzqTZRnpRGQU0kpYkpXVzNKCJQlVSxIEJFNIQGEEpSlAIQhFJA0sTCxSoIKzqIUFS1V8tTSxQZL7UqNzZyOtbBpqGraB2tWyYZbmBu2Sd2zrUM5rQdo37Sb+zuKtpSmHidXephdv3ntKkNmQgLU7lFpXqPLjLjKGFXW2qcLZLKUAxODFottgpWWISymY1ikbQBWoLEJwswlqzW2TVPSsm7gfnirzbXipWUCoDb1C0RmArbKyiY2E8ALNNWmFRStq8VWCMqUWth/QlI3KsHJwqcVKLTwN6IB2FRY0cSCTEUsfAJgdxTsR4dyDGlFNSldGD5STMSUoHIJYkECQhGUECSlKUEDkoTUQUUUUJRhAoQwopSgbgQwqSUVBFgSwKSEkEfJBDkFKjKCMU04DgngoyimgogowlhQOD1IHKGEoQTykoutHEVA+UZTMaUoHylKYlKB+JOFRQ4kcSCcVUeUVfEljUoU8SUqOUcS2yehKbKEoJJSDkyUpQSYklHKMop0pSm4kkDpSlMlJA+Ug5MSQSY0ZUUoygeiCmYkcSgkDkVFKWJBKkog9HGgklHEocSGJBNKWNQ4ksSCYVEeUUEpSip8SEqHEjjREuJLEo8aWJFTCoiKiryliQWcSUqtiRD0oTSlKiFRO5QIKkoykkqyUoSkkgQcjKSSBSjKSSBSlKSSAgpSkkgEpSkkgUoSkkihiSxJJIDjSxJJIDKEpJIFiSxJJIFiRlJJAMSOJJJAsSUpJIFKWJJJAsSOJJJAsSEpJIFKWJJJB//Z',
    //         priority: 'normal',
    //         done: false,
    //         open: false
    //     }
    // ];

    getTasks() {

        return fetch('https://task-manager-55ca3.firebaseio.com/tasks.json')
                .then( res => res.json())
                .then( dd => [dd])

        // return new Promise((resolve, reject) => {
        //     // this.data = [];
        //     setTimeout(() => {
        //         resolve(this.data);
        //         // reject(new Error('Something went wrong'));
        //     }, 700);
        // });
    }

    createTask(task) {
       return fetch('https://task-manager-55ca3.firebaseio.com/tasks.json', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }
}