          const carousel = document.getElementById('carousel');
          const images = carousel.querySelectorAll('img');
          const scrollAmount = 310;
          const indicators = document.getElementById('indicators');

          // インジケーター作成
          images.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('indicator');
            indicators.appendChild(dot);
          });

          const dots = indicators.querySelectorAll('.indicator');

          function updateActiveImage() {
            let center = carousel.scrollLeft + carousel.clientWidth / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            images.forEach((img, index) => {
              const rect = img.getBoundingClientRect();
              const imgCenter = rect.left + rect.width / 2;
              const distance = Math.abs(window.innerWidth / 2 - imgCenter);
              if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
              }
            });

            images.forEach((img, i) => {
              img.classList.toggle('active', i === closestIndex);
              dots[i].classList.toggle('active', i === closestIndex);
            });
          }

          function scrollleft() {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          }

          function scrollright() {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }

          // イベントリスナー
          carousel.addEventListener('scroll', () => {
            window.requestAnimationFrame(updateActiveImage);
          });

          window.addEventListener('load', updateActiveImage);

          images.forEach((img) => {
            img.addEventListener('click', () => {
              const imgCenter = img.offsetLeft + img.offsetWidth / 2;
              const targetScrollLeft = imgCenter - carousel.clientWidth / 2;
              carousel.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
            });
          }); 
