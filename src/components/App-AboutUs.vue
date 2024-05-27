<template>
  <div class="about-us">
    <div class="about-us__left">
      <img src="@/assets/picture.jpg" alt="Banner">
    </div>
    <div class="about-us__right">
      <h2 class="about-us__title">О нас</h2>
      <p class="about-us__text">
        <strong>TREND CITY</strong> – грузинская торговая марка с солидной историей, которая берет свое начало аж с 1984 года. Постоянно расширяя ассортимент и главное – качество и дизайн, бренд быстро снискал успех за пределами Грузии.
      </p>
      <p class="about-us__text">
        Продукция бренда реализуется по всему миру: в 60 странах открыто более 3 500 фирменных магазинов.
      </p>
      <p class="about-us__text">
        Сегодня <strong>TREND CITY</strong> производит помимо одежды также обувь, сумки, бижутерию и солнцезащитные очки.
      </p>
      <p class="about-us__text">
        Оплата в 2 клика и доставка по всему миру.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppAboutUs'
});
</script>

<style scoped>
.about-us {
  display: flex;
  align-items: center;
  font-family: Mulish, sans-serif;
  justify-content: space-between;
  margin: 50px 0;
}

.about-us__left {
  flex: 1;
  margin-right: 20px;
}

.about-us__left img {
  max-width: 100%;
  height: auto;
  border-radius: 50px;
  box-shadow: 6px 7px 10px #000;
}

.about-us__right {
  flex: 1;
  padding: 20px;
  text-align: left;
}

.about-us__title {
  font-size: 32px;
  margin-bottom: 80px;
  font-weight: bold;
  text-align: center;
}

.about-us__text {
  font-size: 18px;
  line-height: 1.5;
}
.about-us {
  display: flex;
}

.about-us__left {
  flex: 1;
}

.about-us__right {
  flex: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about-us__title {
  width: 200px;
  font-size: 30px;
  margin-bottom: 100px;

}
.about-us__right h2 {
  box-shadow: 6px 7px 10px #000;
  border-radius: 20px;
}

.about-us__text {
  align-items: center;
  text-align: center;
  width: 500px;
  font-size: 20px;
  margin-bottom: 20px;

}

</style>
