<template>
    <div class="wrapper">
      <div class="header">
        <img class="logo" src="source/logo.png" alt="platega.io" />
        <div class="block timer">
          <img src="source/timer.png" alt="Осталось" />
          {{ timer }} минут
        </div>
      </div>
  
      <div class="middle">
        <h1>Необходимо сделать перевод на карту</h1>
        <div class="block-wrapper">
          <div class="block-wrapper two">
            <div class="block sber">
              <img
                id="sberbank_logo"
                src="source/sber-2x.png"
                srcset="source/sber.png"
                alt="Сбер"
                v-if="showBankLogo"
              />
              <div id="div_bank">{{ bankStatus }}</div>
            </div>
            <div class="block ruble">
              <div class="ruble-nocopy">
                <img src="source/ruble.png" alt="₽" />
                <div id="div_summ">{{ summStatus }}</div>
              </div>
              <button class="copy-btn" @click="copyRuble">
                <img src="source/copy.png" />
              </button>
            </div>
          </div>
          <div class="block number">
            <div id="div_card">{{ cardStatus }}</div>
            <button class="copy-btn" @click="copyCard">
              <img src="source/copy.png" />
            </button>
          </div>
        </div>
      </div>
  
      <div class="footer">
        <div class="text-wrapper">
          Проверьте что перевели точную сумму, иначе мы не сможем зачислить
          перевод
        </div>
        <button class="submit" @click="confirmPayment">Я оплатил</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        timer: 15,
        showBankLogo: false,
        bankStatus: "Анализ банка...",
        summStatus: "Считаю...",
        cardStatus: "Проверяю номер карты...",
      };
    },
    methods: {
      copyRuble() {
        this.copyToClipboard("Сумма скопирована!");
      },
      copyCard() {
        this.copyToClipboard("Номер карты скопирован!");
      },
      confirmPayment() {
        alert("Оплата подтверждена");
      },
      copyToClipboard(message) {
        navigator.clipboard.writeText(message).then(() => {
          alert(message);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }
  
  .wrapper {
    background-color: #5990ff;
    display: flex;
    flex-direction: column;
    gap: 45px;
    padding: 50px;
    max-width: 565px;
    height: 730px;
    border-radius: 45px;
  }
  
  .wrapper.wait {
    max-height: 550px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .middle {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  
  h1 {
    color: white;
    font-size: 36px;
    margin: 0;
  }
  
  .block-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .block-wrapper.two {
    flex-direction: row;
  }
  
  .block {
    display: flex;
    justify-content: left;
    align-items: center;
    align-self: stretch;
    gap: 15px;
    flex: 1 0 0;
    height: 70px;
    padding: 0px 5px 0px 25px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 15px;
    color: #000;
    font-size: 22px;
    font-weight: 500;
  }
  
  .sber {
    padding: 0px 25px 0px 15px;
  }
  
  .ruble {
    justify-content: space-between;
  }
  
  .ruble-nocopy {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  
  .copy-btn {
    cursor: copy;
  }
  
  .number {
    padding: 5px 5px 5px 20px;
    justify-content: space-between;
  }
  
  .timer {
    display: flex;
    height: 49px;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 0 18px;
    background: rgba(255, 255, 255, 0.85);
    font-size: 18px;
  }
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  
  button:hover {
    transition: 0.2s;
    background-color: rgba(255, 255, 255, 0.85);
  }
  
  .footer {
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 100%;
    justify-content: flex-end;
  }
  
  .text-wrapper {
    padding: 0 10px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 18px;
    font-weight: 500;
  }
  
  .submit {
    width: 100%;
    background-color: white;
    color: black;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
  }
  
  .logo {
    object-fit: contain;
  }
  </style>
  