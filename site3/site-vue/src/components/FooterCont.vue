<template>
    <footer id="footer" :class="attr">
      <div class="footer__inner container">
        <div class="footer__text">
          <h5>dkdlelw</h5>
          <p>
            궁금한 사항은 <br />
            메일로 연락주세요!
            <br />
            <router-link to="mailto:1346zany@gmail.com">1346zany@gmail.com</router-link>
          </p>
          <ul class="sns">
            <li>
              <router-link to="/">
                <span class="ir">페이스북</span>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <span class="ir">인스타</span>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <span class="ir">유튜브</span>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <span class="ir">깃</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer__menu">
          <div>
            <h4>사이트</h4>
            <ul>
              <li>
                <router-link to="/">웹표준 사이트</router-link>
              </li>
              <li>
                <router-link to="/">반응형 사이트</router-link>
              </li>
              <li>
                <router-link to="/">패럴럭스 사이트</router-link>
              </li>
              <li>
                <router-link to="/">포트폴리오 사이트</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h4>유형</h4>
            <ul>
              <li>
                <router-link to="/">이미지 유형</router-link>
              </li>
              <li>
                <router-link to="/">카드 유형</router-link>
              </li>
              <li>
                <router-link to="/">이미지/텍스트 유형</router-link>
              </li>
              <li>
                <router-link to="/">배너 유형</router-link>
              </li>
              <li>
                <router-link to="/">텍스트 유형</router-link>
              </li>
              <li>
                <router-link to="/">푸터 유형</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h4>스크립트</h4>
            <ul>
              <li>
                <router-link to="/">검색 이펙트</router-link>
              </li>
              <li>
                <router-link to="/">퀴즈 이펙트</router-link>
              </li>
              <li>
                <router-link to="/">마우스 이펙트</router-link>
              </li>
              <li>
                <router-link to="/">슬라이드 이펙트</router-link>
              </li>
              <li>
                <router-link to="/">패랠랙스 이펙트</router-link>
              </li>
              <li>
                <router-link to="/">게임 이펙트</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h4>레퍼런스</h4>
            <ul>
              <li>
                <router-link to="/">CSS</router-link>
              </li>
              <li>
                <router-link to="/">FONTS</router-link>
              </li>
              <li>
                <router-link to="/">HTML</router-link>
              </li>
              <li>
                <router-link to="/">JAVASCRIPT</router-link>
              </li>
              <li>
                <router-link to="/">REACT</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__right">Copyright 2023. All Rights Reserved - Designed by dkdlelw</div>
      </div>
    </footer>
</template>

<script>
export default ({
  props: {
    attr: String
  }
})
</script>

<style lang="scss">
@import "../assets/scss/setting/mixins.scss";
// footer__inner
.footer__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .footer__text {
        width: 20%;
        h5 {
            font-size: 18px;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            color: #808080;

            a {
                text-decoration: underline;
                text-underline-position: under;
            }
        }

        .sns {
            li {
                display: inline;
                a {
                    display: inline-block;
                    width: 45px;
                    height: 45px;
                    @include border(45px);
                    background-color: #fff;
                    background-image: url(../assets/images/footer/snsIcon.svg);
                }
                &:nth-child(2) a {
                    background-position: -45px 0;
                }
                &:nth-child(3) a {
                    background-position: -90px 0;
                }
                &:nth-child(4) a {
                    background-position: -135px 0;
                }
            }
        }
    }
    .footer__menu {
        width: 70%;
        display: flex;
        > div {
            width: 25%;
            h4 {
                font-size: 18px;
                color: #000;
                margin-bottom: 20px;
            }
            a {
                font-size: 14px;
                color: #808080;
                line-height: 1.8;
            }
        }
    }
    .footer__right {
        width: 100%;
        padding: 30px;
        text-align: center;
        border-top: 1px solid #E5E5E5;
        margin-top: 50px;
        color: #808080;
        font-size: 14px;
    }
}
</style>
