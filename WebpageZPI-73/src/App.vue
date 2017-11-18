<template>
  <div id="app">
    <nav class="nav_bar">
      <h2 class="animated flipInX main_logo">ЗПI - зп 73</h2>
      <a href="/app/">Вхід для студентів</a>
        <a class="animated flipInX" v-for="nav in navs" :key="nav.title" :href="`#${nav.id}`" v-smooth-scroll>{{ nav.title }}</a>
        <button class="nav_btn" @click="show = !show">=</button>
    </nav>
    <transition name="fade">
    <nav class="animated bounceInRight hide_nav_bar" v-if="show">
        <a v-for="hnav in hnavs" :key="hnav.title" :href="`#${hnav.id}`" v-smooth-scroll>{{ hnav.title }}</a>
        <a href="/app/">Вхід для студентів</a>
        <button class="nav_btn" @click="show = !show">=</button>
    </nav>
    </transition>
    <header id="header" class='parallax-window' data-parallax="scroll" data-image-src="static/img/mtmfb.jpg">
      <div class="head_info">
        <div class="head_info_bg">
          <div class="head_info_in">
            <div class="animated rotateIn head_info_last">
              <h2>Ласкаво просимо на офіційну сторінку стундентів групи ЗПI - зп 73</h2>
              <h1>Київського політехнічного інституту імені Ігоря Сікорського</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="to_down">
			<div class="mouse-icon">
				<div class="whell">
				</div>
			</div>
		</div>
    </header>
    <section id="about_us" class='parallax-window_ab' data-parallax="scroll" data-image-src="static/img/ping_img.jpg">
        <div class="container">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <div class="" id="text_about">
                <p>Про нас</p>
                <p>Ми – група однодумців, головною метою об’єднання яких є отримання сучасної та якісної освіти у сфері програмування та IT – технологій в одному з найповажніших вишів України – Національному технічному університеті України «Київський політехнічний інститут імені Ігоря. Сікорського». Всі ми люди різного віку, різноманітних професій, поглядів та міркувань, які вже мають вищу освіту, але об’єднані наразі спільними освітянськими цілями та завданнями на найближче майбутнє, а саме:</p>
                <p>- ознайомитися з усіма найважливішими теоретичними надбаннями інженерів – програмістів та вчених у сферах практичного використання електронно – обчислювальної техніки та автоматизованої обробки інформації;</p>
                <p>- оволодіти глибокими та новітніми знаннями у сфері створення програмного забезпечення, опанувати як сталі класичні, так і нові і сучасні технології в програмуванні;</p>
                <p>- стати професійними розробниками, освіченими спеціалістами в своїй галузі, які можуть своєю працею приносити користь суспільству та забезпечувати достойний та стабільний достаток своїм родинам;</p>
                <p>- опанувати програмну інженерію як технічну науку, головним покликанням якої є вирішення питань з якісної обробки та корисного використання інформації, проведення складних обчислень, вирішення інших технічних завдань з метою створення сприятливих умов для подальшого технічного прогресу та розвитку людства.</p>
                <p>Ми об’єднали свої зусилля як одногрупники групи ЗПІ-зп73 НМК «ІПО» кафедри АПЕПС (факультет ТЕФ) задля досягнення поставлених цілей та реалізації освітніх завдань, що виникають перед нами в процесі опанування нової спеціальності</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#contacts"><div class="to_down_contacts">
			<div class="mouse-icon">
				<div class="whell">
				</div>
			</div>
		</div></a>
    </section>
    <section id="contacts" class="contacts">
      <img src="static/img/contact_mail.jpg" alt="contact_mail_img">
          <div class="contact_info">
        <div class="contact_info_bg">
          <div class="contact_info_in">
            <div class="contact_info_last">
              <h2 class="">Электоронна адреса групи:</h2>
                <h1 class="">zpizp73@gmail.com</h1>

            </div>
          </div>
        </div>
      </div>
      <a href="#about_university"><div class="to_down_university">
			<div class="mouse-icon">
				<div class="whell">
				</div>
			</div>
		</div></a>
    </section>
    <div class="scrolling">
					<a href='#' id='Go_Top'>
            <img src="static/img/1000px-Top_Arrow.svg.png" alt="Вгору">
              </a>
				</div>

    <section id="about_university" class='parallax-window_au' data-parallax="scroll" data-image-src="static/img/kpi-future.jpg">
      <div class="true_kpi" v-show="showObj"><img src="static/img/oldkpi.jpg" alt="oldkpi"><p>Стародавнiй КПI</p><button class="to_fake_kpi" @click="showObj = !showObj">Вiдтворення сучасного КПI</button></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4"><p class='animated bounceInLeft fake_kpi'>Це сучасний КПI</p></div>
          <div class="col-sm-3"></div>
          <div class="col-sm-5"><button class="animated bounceInRight to_true_kpi" @click="showObj = !showObj">Показати оригiнал</button></div>
        </div>
      </div>
      <a href="#donate"><div class="to_down_donate">
			<div class="mouse-icon">
				<div class="whell">
				</div>
			</div>
		</div></a>
    </section>
    <section id="donate" class='parallax-window_donate' data-parallax="scroll" data-image-src="static/img/ws_Cubes_1920x1080.jpg">
      <div class="container">
        <div class="row">
          <div class="col-sm-6"><p class="predpodInfo">
Якщо викладачеві необхідно передати групі інформацію, це можна зробити надіславши електронного листа на пошту або заповнити дану форму</p></div>
          <div class="col-sm-6">
            <div class="sendForm">
              <input id="subject" type="text" placeholder="Назва дисципліни">
              <input id="teacher" type="text" placeholder="ПІБ Викладача">
              <textarea name="info" id="info" cols="30" rows="10" placeholder="Інформація для групи"></textarea>
              <button id="send-info">Відправити</button>
            </div>
          </div>

        </div>
      </div>
    </section>
    <footer class='parallax-window_f' data-parallax="scroll" data-image-src="static/img/mtmfb.jpg">
      <div class="container_foot">
        <span class="foot_info">@ЗПI - зп 73 - Всi права захищенi</span>
      </div>
    </footer>

  </div>
</template>

<script>
export default {

  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      logo: 'ЗПI - зп 73',
      showObj: false,
      show: false,
      navs: [
      { id: 'donate', title: 'Викладачам' },
      { id: 'about_university', title: 'Про КРI' },
      { id: 'contacts', title: 'Контакти'},
      { id: 'about_us', title: 'Про нас'},
      { id: 'header', title: 'Головна' }
      ],
      hnavs: [
      { id: 'header', title: 'Головна'},
      { id: 'about_us', title: 'Про нас' },
      { id: 'contacts', title: 'Контакти'},
      { id: 'about_university', title: 'Про КРI'},
      { id: 'donate', title: 'Викладачам' }
      ]
    }
  }
}
</script>

<style lang="scss" src=".\components\scss\main.scss">


</style>
