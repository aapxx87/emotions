const fill_slider_options = function (element, app_data_obj, slider) {

  for (const item of Object.entries(app_data_obj)) {

    const option = document.createElement('div'); // Переместите создание элемента внутрь цикла
    option.classList.add('swiper-slide');

    if (app_data_obj === life_events_impact) {
      option.textContent = item[1].description; // Задаем текстовое содержимое для каждого слайда
    } else {
      option.textContent = item[0]; // Задаем текстовое содержимое для каждого слайда
    }

    element.append(option); // Добавляем слайд в элемент слайдера
  }
  // slider.update(); // Обновить слайдер после добавления всех слайдов

}


fill_slider_options(slider_first_external_events, life_events_impact)

fill_slider_options(slider_second_emotional_states, emotion_neurochemical_map)




