// const emotional_state = 'anger'


const display_nerochemical_boxes_emotional_states = function (emotional_state) {

  document.querySelector('.biochemical-levels-display').innerHTML = ''

  for (const state_details of Object.entries(emotion_neurochemical_map)) {

    if (state_details[0] === emotional_state) {


      for (const chemical_elements of Object.entries(state_details[1])) {


        const chemical_box_element = document.createElement('div')
        chemical_box_element.classList.add('biochemical-level')
        chemical_box_element.setAttribute('data-name', chemical_elements[0])
        chemical_box_element.textContent = chemical_elements[0]

        // Создание надписи в колбе с названием БиоХимЭлемента
        const textContainer = document.createElement('div'); // Создаем контейнер для текста
        textContainer.classList.add('chemical-name'); // Добавляем класс для стилизации 
        textContainer.textContent = chemical_elements[0]; // Устанавливаем текст
        chemical_box_element.appendChild(textContainer); // Добавляем текстовый контейнер в элемент "колбочки"

        // Создание заполнения каждой колбы
        // Забираем занчение процентов на сколько заполнить колбу
        const fillingPercentage = chemical_elements[1];
        // Забираем цвет заполенния колбы
        const fillingColor = neurochemical_profiles[chemical_elements[0]].background;

        // Стилизация псевдоэлементов по высоте и цвету
        chemical_box_element.style.setProperty('--filling-height', `${fillingPercentage}%`);
        chemical_box_element.style.setProperty('--filling-color', fillingColor);



        document.querySelector('.biochemical-levels-display').append(chemical_box_element)

        document.querySelector('.choosed_option--name').textContent = emotional_state

        description_container.textContent = ''

      }

    }

  }


}



const external_events = 'Receiving Praise'


const display_nerochemical_boxes_external_events = function (external_event_name) {

  document.querySelector('.biochemical-levels-display').innerHTML = ''

  for (const event_obj of Object.entries(life_events_impact)) {


    if (event_obj[1].description === external_event_name) {
      // console.log(event_obj[1].detailedDescription);

      for (const chemical_elements of Object.entries(event_obj[1].biochemistryChanges)) {

        // console.log(chemical_elements);

        const chemical_box_element = document.createElement('div')
        chemical_box_element.classList.add('biochemical-level')
        chemical_box_element.setAttribute('data-name', chemical_elements[0])
        chemical_box_element.textContent = chemical_elements[0]

        const textContainer = document.createElement('div'); // Создаем контейнер для текста
        textContainer.classList.add('chemical-name'); // Добавляем класс для стилизации (если потребуется)
        textContainer.textContent = chemical_elements[0]; // Устанавливаем текст
        chemical_box_element.appendChild(textContainer); // Добавляем текстовый контейнер в элемент "колбочки"


        const fillingPercentage = chemical_elements[1]; // предполагаем, что это процент заполнения
        const fillingColor = neurochemical_profiles[chemical_elements[0]].background; // предположим, что цвет задан таким образом

        // Установка CSS переменных для каждого "chemical_box_element"
        chemical_box_element.style.setProperty('--filling-height', `${fillingPercentage}%`);
        chemical_box_element.style.setProperty('--filling-color', fillingColor);

        document.querySelector('.biochemical-levels-display').append(chemical_box_element)
        document.querySelector('.choosed_option--name').textContent = external_event_name


        description_container.textContent = event_obj[1].detailedDescription



      }

    }

  }


}

