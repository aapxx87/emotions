const emotion_neurochemical_map = {
  love: {
    dopamine: 50,
    serotonin: 60,
    oxytocin: 90,
  },
  happiness: {
    dopamine: 70,
    serotonin: 80,
    oxytocin: 40,
  },
  anger: {
    adrenaline: 80,
    cortisol: 70,
  },
  depression: {
    dopamine: 20,
    serotonin: 20,
  },
  anxiety: {
    cortisol: 70,
    adrenaline: 60,
  },
  mania: {
    dopamine: 100,
    serotonin: 50,
  },
  stress: {
    cortisol: 80,
    adrenaline: 60,
  },
  apathy: {
    dopamine: 10,
    serotonin: 30,
  },
  euphoria: {
    dopamine: 90,
    endorphins: 80,
  },
  sadness: {
    serotonin: 20,
    oxytocin: 20,
  },
  curiosity: {
    dopamine: 60,
    adrenaline: 50,
  },
  fear: {
    cortisol: 80,
    adrenaline: 90,
  },
  motivation: {
    dopamine: 60,
    adrenaline: 50,
  },
  irritation: {
    adrenaline: 70,
  },
  revelation: {
    dopamine: 80,
    serotonin: 70,
  }
}


const neurochemical_profiles = {
  dopamine: {
    background: '#ffcc00',
    increase: ["Receiving Praise", "Eating Delicious Food", "Listening to Favourite Music", "Physical Exercise", "Receiving Rewards/Winning", "Solving a Problem", "Switching Tasks/Projects"],
    decrease: ["Facing Criticism"],
  },
  serotonin: {
    background: '#00ccff',
    increase: ["Reading Positive News", "Feeling Satiety", "Meditation/Yoga", "Relaxation", "Consuming Caffeine/Chocolate"],
    decrease: ["Reading Negative News", "Feeling Hunger", "Lack of Sleep"],
  },
  oxytocin: {
    background: '#ff99cc',
    increase: ["Social Interactions: Friends"],
    decrease: ["Social Interactions: Conflict"],
  },
  endorphins: {
    background: '#ff6666',
    increase: ["Physical Exercise", "Listening to Favourite Music"],
    decrease: [],
  },
  cortisol: {
    background: '#6666ff',
    increase: ["Facing Criticism", "Reading Negative News", "Feeling Hunger", "Lack of Sleep", "Social Interactions: Conflict"],
    decrease: ["Meditation/Yoga", "Relaxation"],
  },
  adrenaline: {
    background: '#66cc33',
    increase: ["Physical Exercise", "Social Interactions: Conflict"],
    decrease: [],
  }
};



const life_events_impact = {
  receivingPraise: {
    description: "Receiving Praise", // Получение Похвалы
    biochemistryChanges: {
      dopamine: 60,
      serotonin: 50,
    },
    detailedDescription: "Positive feedback can increase dopamine levels, leading to feelings of reward and satisfaction.", // Положительная обратная связь может увеличить уровень дофамина, вызывая ощущение награды и удовлетворения.
  },
  facingCriticism: {
    description: "Facing Criticism", // Столкновение с Критикой
    biochemistryChanges: {
      cortisol: 70, // Увеличение уровня кортизола
      dopamine: 30, // Снижение уровня дофамина теперь представлено как увеличение до 30 в абсолютных значениях
    },
    detailedDescription: "Negative feedback can raise cortisol levels, causing stress, and decrease dopamine levels, leading to feelings of disappointment.", // Отрицательная обратная связь может повысить уровень кортизола, вызывая стресс, и снизить уровень дофамина, ведущий к ощущениям разочарования.
  },
  readingPositiveNews: {
    description: "Reading Positive News", // Чтение Позитивных Новостей
    biochemistryChanges: {
      serotonin: 40,
    },
    detailedDescription: "Positive news can boost serotonin levels, enhancing a sense of well-being.", // Позитивные новости могут повысить уровень серотонина, улучшая чувство благополучия.
  },
  readingNegativeNews: {
    description: "Reading Negative News", // Чтение Негативных Новостей
    biochemistryChanges: {
      cortisol: 60,
    },
    detailedDescription: "Negative news can increase cortisol levels due to stress, affecting mood negatively.", // Негативные новости могут повысить уровень кортизола из-за стресса, негативно влияя на настроение.
  },
  feelingHunger: {
    description: "Feeling Hunger", // Чувство Голода
    biochemistryChanges: {
      serotonin: 20, // Уменьшение уровня серотонина теперь представлено как 20
      cortisol: 50,
    },
    detailedDescription: "Hunger can decrease serotonin and increase cortisol, leading to irritability and stress.", // Голод может снизить уровень серотонина и увеличить кортизол, приводя к раздражительности и стрессу.
  },
  feelingSatiety: {
    description: "Feeling Satiety", // Чувство Сытости
    biochemistryChanges: {
      dopamine: 50,
    },
    detailedDescription: "Feeling full, especially after eating tasty food, can increase dopamine levels, leading to satisfaction.", // Чувство сытости, особенно после употребления вкусной еды, может увеличить уровень дофамина, приводя к удовлетворению.
  },
  lackOfSleep: {
    description: "Lack of Sleep", // Недосып
    biochemistryChanges: {
      cortisol: 80,
      serotonin: 30, // Уменьшение уровня серотонина теперь представлено как 30
    },
    detailedDescription: "Sleep deprivation can increase cortisol and decrease serotonin levels, affecting mood and alertness negatively.", // Недостаток сна может повысить уровень кортизола и снизить серотонин, негативно влияя на настроение и бдительность.
  },
  listeningToFavouriteMusic: {
    description: "Listening to Favourite Music", // Прослушивание Любимой Музыки
    biochemistryChanges: {
      dopamine: 70,
      endorphins: 60,
    },
    detailedDescription: "Listening to favourite music can increase levels of dopamine and endorphins, improving mood and reducing stress.", // Прослушивание любимой музыки может повысить уровни дофамина и эндорфинов, улучшая настроение и снижая стресс.
  },
  physicalExercise: {
    description: "Physical Exercise", // Физическая Активность
    biochemistryChanges: {
      endorphins: 70,
      dopamine: 60,
    },
    detailedDescription: "Physical exercises can increase levels of endorphins and dopamine, enhancing mood and energy.", // Физические упражнения могут повысить уровни эндорфинов и дофамина, улучшая настроение и энергию.
  },
  meditationYoga: {
    description: "Meditation/Yoga", // Медитация/Йога
    biochemistryChanges: {
      cortisol: 30, // Снижение уровня кортизола представлено как 30, означая значительное уменьшение.
      serotonin: 50,
    },
    detailedDescription: "Meditation and yoga can reduce cortisol levels and increase serotonin, promoting relaxation and well-being.", // Медитация и йога могут снизить уровень кортизола и повысить серотонин, способствуя расслаблению и благополучию.
  },
  socialInteractionFriends: {
    description: "Social Interaction: Friends", // Социальное Взаимодействие: Друзья
    biochemistryChanges: {
      oxytocin: 70,
    },
    detailedDescription: "Interacting with friends can increase oxytocin levels, enhancing feelings of bonding and happiness.", // Общение с друзьями может увеличить уровень окситоцина, усиливая чувства привязанности и счастья.
  },
  conflict: {
    description: "Conflict", // Конфликт
    biochemistryChanges: {
      cortisol: 70,
      adrenaline: 50,
    },
    detailedDescription: "Engaging in conflict can raise cortisol and adrenaline levels, leading to stress and agitation.", // Участие в конфликте может повысить уровни кортизола и адреналина, приводя к стрессу и возбуждению.
  },
  switchingTasks: {
    description: "Switching Tasks/Projects", // Смена Задач/Проектов
    biochemistryChanges: {
      dopamine: 60,
    },
    detailedDescription: "Switching tasks or starting new projects can increase dopamine due to novelty and stimulation.", // Смена задач или начало новых проектов может увеличить уровень дофамина из-за новизны и стимуляции.
  },
  receivingRewards: {
    description: "Receiving Rewards/Winning", // Получение Награды/Победа
    biochemistryChanges: {
      dopamine: 100,
    },
    detailedDescription: "Receiving a reward or winning can significantly increase dopamine levels, leading to intense feelings of joy.", // Получение награды или победа может значительно повысить уровень дофамина, вызывая интенсивные чувства радости.
  },
  solvingProblems: {
    description: "Solving Problems", // Решение Проблем
    biochemistryChanges: {
      dopamine: 75,
    },
    detailedDescription: "Successfully solving problems can increase dopamine levels, leading to feelings of achievement and satisfaction.", // Успешное решение проблем может повысить уровень дофамина, вызывая чувства достижения и удовлетворения.
  },
  relaxation: {
    description: "Relaxation", // Расслабление
    biochemistryChanges: {
      cortisol: 30, // Снижение уровня кортизола представлено как 30
      serotonin: 60,
    },
    detailedDescription: "Engaging in relaxing activities can decrease cortisol and increase serotonin, promoting calmness and contentment.", // Занятие расслабляющими деятельностями может снизить кортизол и повысить серотонин, способствуя спокойствию и удовлетворенности.
  },
  caffeineChocolateConsumption: {
    description: "Caffeine/Chocolate Consumption", // Употребление Кофеина/Шоколада
    biochemistryChanges: {
      dopamine: 40,
      serotonin: 30,
    },
    detailedDescription: "Consumption of caffeine or chocolate can temporarily boost dopamine and serotonin levels, enhancing mood and alertness." // Употребление кофеина или шоколада может временно повысить уровни дофамина и серотонина, улучшая настроение и бдительность.
  },

};




