<template>
  <div id="app">
    <ComponenteHeader
    :linkNavbar="linkNavbar"
    :contacts="contacts"
    :social="social"/>
    <ComponenteMain/>
    <ComponenteFooter
    :linkFooter="linkFooter"/>
  </div>
</template>

<script>
import ComponenteHeader from './components/ComponenteHeader.vue'
import ComponenteMain from './components/ComponenteMain.vue'
import ComponenteFooter from './components/ComponenteFooter.vue'
// import ComponenteHeader from './components/ComponenteHeader.vue'
export default {
  name: 'App',
  components: {
    ComponenteHeader,
    ComponenteMain,
    ComponenteFooter
  },
  data()
  {
    return {
      linkNavbar:
      [
        {
          testo: 'Home',
          link: '#',
          badge: false,
          textBadge: ''
        },
        {
          testo: 'About',
          link: '#',
          badge: false,
          textBadge: ''
        },
        {
          testo: 'Courses',
          link: '#',
          badge: true,
          textBadge: 'New'
        },
        {
          testo: 'Events',
          link: '#',
          badge: false,
          textBadge: ''
        },
        {
          testo: 'Facilities',
          link: '#',
          badge: false,
          textBadge: ''
        },
        {
          testo: 'News',
          link: '#',
          badge: false,
          textBadge: ''
        },
        {
          testo: 'Admissions',
          link: '#',
          badge: true,
          textBadge: 'Apply'
        }
      ],

      contacts:
      [
        {
          testo: '1.800.567.8910',
          link: '#',
          badge: true,
          icona: 'fa-phone-flip'
        },
        {
          testo: 'Contact Us',
          link: '#',
          badge: false,
          icona: 'fa-envelope'
        },
        {
          testo: 'Alumns',
          link: '#',
          badge: false,
          icona: 'fa-graduation-cap'
        },
        {
          testo: 'Campus',
          link: '#',
          badge: false,
          icona: 'fa-building-columns'
        }
        
      ],

      social:
      [
        {
          link: '#',
          icona: 'fa-facebook-f'
        },
        {
          link: '#',
          icona: 'fa-twitter'
        },
        {
          link: '#',
          icona: 'fa-youtube'
        },
        {
          link: '#',
          icona: 'fa-instagram'
        },
        
        
      ],

      linkFooter:
      [
        {
          titolo: 'Courses',
          li:
          [
            {
              testo: "Arts & Humanities",
              link: "#"
            },
            {
              testo: "Business & Management",
              link: "#"
            },
            {
              testo: "Engineering & Technology",
              link: "#"
            },
            {
              testo: "Life Sciences & Medicine",
              link: "#"
            },
            {
              testo: "Natural Sciences",
              link: "#"
            }
          ],
          link: '#'
        },
        {
          titolo: 'Resources',
          li:
          [
            {
              testo: "Campus Directory",
              link: "#"
            },
            {
              testo: "Academic Calendar",
              link: "#"
            },
            {
              testo: "Sport Clubs",
              link: "#"
            },
            {
              testo: "Graduate Programs",
              link: "#"
            },
            {
              testo: "Faculty & Staff",
              link: "#"
            }
          ],
          link: '#'
        },
        {
          titolo: 'Admission',
          li:
          [
            {
              testo: "Eligibility",
              link: "#"
            },
            {
              testo: "Application",
              link: "#"
            },
            {
              testo: "Review Process",
              link: "#"
            },
            {
              testo: "How to Apply",
              link: "#"
            }
          ],
          link: '#'
        },
        {
          titolo: 'courses',
          li:
          [
            {
              testo: "University Library",
              link: "#"
            },
            {
              testo: "Campus Services",
              link: "#"
            },
            {
              testo: "Careers",
              link: "#"
            }
          ],
          link: '#'
        }
        
      ]
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
//reset
*
{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: inherit;
  text-decoration: none;
  list-style-type: none;
  font-family: 'Montserrat', sans-serif;
}
////////// GENERALE ////////////////////////////////////////////////////////////
.contenitore
{
  width: 60%;
  margin: auto;
}
////////// FLEX ////////////////////////////////////////////////////////////
.f-mode
{
  display: flex;
}
.f-justify-center
{
  justify-content: center;
}
.f-justify-between
{
  justify-content: space-between;
}
.f-align-center
{
  align-items: center;
}

.flex-wrap
{
  flex-wrap: wrap
}
////////// BOTTONI ////////////////////////////////////////////////////////////
.bg-arancione
{
  background-color: #f09a3f;
}
.bg-azzurrino
{
  background-color: #00bcd4;
}
.color-white
{
  color: white;
}



</style>
