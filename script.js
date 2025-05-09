/* Tailwind configuration */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#FF5C8D',
        secondary: '#FFC2D1',
        accent: '#FFB3C6',
        dark: '#2D3748',
        light: '#F7FAFC',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  }
};

// 页面滚动时导航栏样式变化
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('py-2', 'shadow-lg');
    navbar.classList.remove('py-3', 'shadow-md');
  } else {
    navbar.classList.add('py-3', 'shadow-md');
    navbar.classList.remove('py-2', 'shadow-lg');
  }
});

// 移动端菜单切换
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuToggle.innerHTML = mobileMenu.classList.contains('hidden') 
    ? '<i class="fa-solid fa-bars"></i>' 
    : '<i class="fa-solid fa-times"></i>';
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // 关闭移动端菜单
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    }
  });
});

// 标题文字效果
const scarsText = document.getElementById('scarsText');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
  // 触发标题文字效果
  setTimeout(() => {
    const letters = scarsText.textContent.split('');
    scarsText.textContent = '';
    
    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.display = 'inline-block';
      span.style.transition = 'all 0.5s ease';
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      scarsText.appendChild(span);
      
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
        
        // 最后一个字符动画完成后，显示康乃馨
        if (index === letters.length - 1) {
          setTimeout(() => {
            createCarnations();
          }, 1000);
        }
      }, 100 * index);
    });
  }, 500);
  
  // 平滑滚动到交互区域
  setTimeout(() => {
    document.getElementById('interactive').scrollIntoView({
      behavior: 'smooth'
    });
  }, 2000);
});

// 创建康乃馨效果
function createCarnations() {
  const carnationContainer = document.getElementById('carnationContainer');
  const scarsTextFinal = document.getElementById('scarsTextFinal');
  
  // 隐藏原始文字
  scarsTextFinal.style.opacity = '0';
  
  // 创建康乃馨元素
  for (let i = 0; i < 20; i++) {
    const carnation = document.createElement('div');
    carnation.className = 'carnation';
    carnation.innerHTML = '<i class="fa-solid fa-seedling text-primary"></i>';
    carnation.style.left = `${Math.random() * 100}%`;
    carnation.style.top = `${Math.random() * 100}%`;
    carnation.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`;
    carnationContainer.appendChild(carnation);
    
    setTimeout(() => {
      carnation.style.opacity = '1';
    }, 100 * i);
  }
}

// 孕前/孕后状态切换
const prePregnancy = document.getElementById('prePregnancy');
const postPregnancy = document.getElementById('postPregnancy');
const toggleState = document.getElementById('toggleState');
let isPregnant = false;

toggleState.addEventListener('click', () => {
  isPregnant = !isPregnant;
  prePregnancy.style.opacity = isPregnant ? '0' : '100';
  postPregnancy.style.opacity = isPregnant ? '100' : '0';
  toggleState.textContent = isPregnant ? '切换到孕前状态' : '切换到孕后状态';
});

// 信息卡片内容
const infoCard = {
  abdomen: {
    title: "撑裂的皮肤不是勋章，是疼痛的纹路",
    description: "妊娠纹是孕期最常见的皮肤变化之一，主要由于皮肤快速扩张导致胶原纤维断裂。这些纹路通常出现在腹部、胸部和大腿等部位，虽然大多数妊娠纹会随着时间变淡，但很少会完全消失。",
    image: "./du.jpg",
    stats: [
      "86%的孕妇会产生妊娠纹",
      "产后十年仍有53%的妊娠纹未消退",
      "皮肤弹性差的女性更容易产生妊娠纹"
    ],
    animationId: "collagenFiberAnimation"
  },
  lowerBack: {
    title: "被压弯的不仅是脊梁，还有说不出口的尊严",
    description: "孕期腰椎承受的压力相当于每天背着20斤大米，这种额外的负担会导致腰椎前凸增加，脊柱弯曲度改变，从而引发腰痛。严重时可能导致腰椎间盘突出，影响生活质量。",
    image: "./yao.jpg",
    stats: [
      "36%的产妇出现腰椎间盘突出",
      "孕期体重增加超过15公斤的女性风险更高",
      "产后6个月仍有25%的女性持续腰痛"
    ],
    animationId: "spineAnimation"
  },
  teeth: {
    title: "孕育新生命的代价，是钙质从骨骼里流失",
    description: "胎儿发育需要从母体摄取大量钙质，如果孕期钙摄入不足，母体骨骼和牙齿中的钙质会被动员出来满足胎儿需求，导致牙齿松动、骨质疏松风险增加。",
    image: "./gai.jpg",
    stats: [
      "胎儿需从母体吸收约30g钙质",
      "孕期钙流失导致牙齿松动率增加40%",
      "产后骨质疏松风险显著升高"
    ],
    animationId: "calciumLossChart"
  }
};

// 显示信息卡片
const cardContent = document.getElementById('cardContent');
const cardTitle = document.getElementById('cardTitle');
const cardDescription = document.getElementById('cardDescription');
const cardImage = document.getElementById('cardImage');
const cardStats = document.getElementById('cardStats');
const closeCard = document.getElementById('closeCard');
const progressBar = document.getElementById('progressBar').querySelector('div');
const progressText = document.getElementById('progressText');
const collagenFiberAnimation = document.getElementById('collagenFiberAnimation');
const spineAnimation = document.getElementById('spineAnimation');
const calciumLossChart = document.getElementById('calciumLossChart');

// 初始化图表
let calciumChart = null;

function initCalciumChart() {
  const ctx = document.getElementById('calciumChart').getContext('2d');
  calciumChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['孕前', '孕12周', '孕24周', '孕36周', '产后'],
      datasets: [{
        label: '母体钙含量 (mg)',
        data: [1200, 1150, 1080, 990, 1020],
        borderColor: '#FF5C8D',
        backgroundColor: 'rgba(255, 92, 141, 0.1)',
        tension: 0.4,
        fill: true
      }, {
        label: '胎儿钙需求 (mg)',
        data: [0, 50, 180, 350, 0],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 800,
          max: 1400,
          title: {
            display: true,
            text: '钙含量 (mg)'
          }
        }
      }
    }
  });
}

// 腹部点击事件
const abdomenArea = document.getElementById('abdomenArea');
abdomenArea.addEventListener('click', () => {
  showCard('abdomen');
  
  // 显示妊娠纹
  setTimeout(() => {
    document.getElementById('stretchMark1').style.opacity = '1';
    document.getElementById('stretchMark1').style.transform = 'rotate(15deg) scale(1)';
  }, 500);
  
  setTimeout(() => {
    document.getElementById('stretchMark2').style.opacity = '1';
    document.getElementById('stretchMark2').style.transform = 'rotate(-10deg) scale(1)';
  }, 700);
  
  setTimeout(() => {
    document.getElementById('stretchMark3').style.opacity = '1';
    document.getElementById('stretchMark3').style.transform = 'rotate(5deg) scale(1)';
  }, 900);
});

// 腰部点击事件
const lowerBackArea = document.getElementById('lowerBackArea');
lowerBackArea.addEventListener('click', () => {
  showCard('lowerBack');
  
  // 脊柱弯曲动画
  setTimeout(() => {
    document.getElementById('spine').style.transform = 'translateX(-50%) rotate(5deg)';
    document.getElementById('spine').style.transformOrigin = 'center bottom';
  }, 500);
});

// 牙齿点击事件
const teethArea = document.getElementById('teethArea');
teethArea.addEventListener('click', () => {
  showCard('teeth');
  
  // 牙齿裂痕动画
  setTimeout(() => {
    document.getElementById('toothCrack1').style.opacity = '1';
  }, 300);
  
  setTimeout(() => {
    document.getElementById('toothCrack2').style.opacity = '1';
  }, 600);
});

// 关闭卡片
closeCard.addEventListener('click', () => {
  cardContent.style.opacity = '0';
  cardContent.style.transform = 'translateY(8px)';
  
  // 重置动画效果
  resetAnimations();
});

// 显示卡片内容
function showCard(area) {
  const data = infoCard[area];
  
  // 隐藏所有动画
  collagenFiberAnimation.classList.add('hidden');
  spineAnimation.classList.add('hidden');
  calciumLossChart.classList.add('hidden');
  
  // 显示当前区域的动画
  document.getElementById(data.animationId).classList.remove('hidden');
  
  // 更新卡片内容
  cardTitle.textContent = data.title;
  cardDescription.textContent = data.description;
  cardImage.src = data.image;
  
  // 更新统计数据
  cardStats.innerHTML = '';
  data.stats.forEach(stat => {
    const li = document.createElement('li');
    li.className = 'flex items-start';
    li.innerHTML = `
      <i class="fa-solid fa-circle-check text-primary mt-1 mr-2"></i>
      <span class="text-gray-700">${stat}</span>
    `;
    cardStats.appendChild(li);
  });
  
  // 显示卡片
  cardContent.style.opacity = '1';
  cardContent.style.transform = 'translateY(0)';
  
  // 更新进度条
  progressBar.style.width = '100%';
  progressText.textContent = `正在查看：${data.title}`;
  
  // 如果是牙齿区域，初始化图表
  if (area === 'teeth' && !calciumChart) {
    initCalciumChart();
  }
}

// 重置动画效果
function resetAnimations() {
  // 隐藏妊娠纹
  document.getElementById('stretchMark1').style.opacity = '0';
  document.getElementById('stretchMark1').style.transform = 'rotate(15deg) scale(0)';
  document.getElementById('stretchMark2').style.opacity = '0';
  document.getElementById('stretchMark2').style.transform = 'rotate(-10deg) scale(0)';
  document.getElementById('stretchMark3').style.opacity = '0';
  document.getElementById('stretchMark3').style.transform = 'rotate(5deg) scale(0)';
  
  // 重置脊柱弯曲
  document.getElementById('spine').style.transform = 'translateX(-50%) rotate(0)';
  
  // 隐藏牙齿裂痕
  document.getElementById('toothCrack1').style.opacity = '0';
  document.getElementById('toothCrack2').style.opacity = '0';
  
  // 重置进度条
  progressBar.style.width = '0';
  progressText.textContent = '请点击左侧身体部位';
}

// 胶原纤维动画
const collagenFiber = document.getElementById('collagenFiber');
const brokenCollagen = document.getElementById('brokenCollagen');

collagenFiberAnimation.addEventListener('click', () => {
  if (collagenFiber.style.width === '0%') {
    collagenFiber.style.width = '100%';
    brokenCollagen.style.width = '0%';
  } else {
    collagenFiber.style.width = '0%';
    brokenCollagen.style.width = '50%';
  }
});

// 脊柱动画
const spineStraight = document.getElementById('spineStraight');
const spineCurved = document.getElementById('spineCurved');

spineAnimation.addEventListener('click', () => {
  if (spineStraight.style.opacity === '0') {
    spineStraight.style.opacity = '1';
    spineCurved.style.opacity = '0';
  } else {
    spineStraight.style.opacity = '0';
    spineCurved.style.opacity = '1';
  }
});


// Audio Player Control
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggleButton = document.getElementById('musicToggleButton');

// Initialize audio
backgroundMusic.volume = 0.3; // Set volume to 30% for subtle background music
backgroundMusic.muted = true; // Start muted to comply with autoplay policies

// Autoplay on page load (unmute after user interaction)
window.addEventListener('load', () => {
  backgroundMusic.play().catch(() => {
    // Autoplay blocked, wait for user interaction
  });
});

// Toggle music play/pause
musicToggleButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.muted = false; // Unmute on first play
    backgroundMusic.play();
    musicToggleButton.classList.remove('muted', 'paused');
  } else {
    backgroundMusic.pause();
    musicToggleButton.classList.add('muted', 'paused');
  }
});

// Update button state when music ends (if not looping)
backgroundMusic.addEventListener('ended', () => {
  musicToggleButton.classList.add('muted', 'paused');
});