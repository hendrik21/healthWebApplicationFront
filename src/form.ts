const choices = [
  {
    "value": "a",
    "text": {
      "en": "a. Did not apply to me at all",
      "es": "a. No se aplica a mí en absoluto",
    }
  },
  {
    "value": "b",
    "text": {
      "en": "b. Applied to me to some degree, or some of the time",
      "es": "b. Aplicado a mí hasta cierto punto, o algunas veces",
    }
  },
  {
    "value": "c",
    "text": {
      "en": "c. Applied to me to a considerable degree or a good part of time",
      "es": "c. Aplicado a mí en un grado considerable o una buena parte del tiempo",
    }
  },
  {
    "value": "d",
    "text": {
      "en": "d. Applied to me very much or most of the time",
      "es": "d. Se me aplica mucho o la mayor parte del tiempo",
    }
  },
]

export const form = {
  "pages": [
    {
      "name": "menu",
      "elements": [
        {
          "name":"name",
          "type": "text",
          "title": {
            "en": "Name",
            "es": "Nombre",
          },
        },
        {
          "name":"language",
          "type": "dropdown",
          "title": {
            "en": "language",
            "es": "Idioma",
          },
          "choices": [
            {"text": "en_us", "value": "en"},
            {"text": "es_es", "value": "es"}
          ]
        },
      ]
    },
    {
      "name": "page1",
      "elements": [
        {
          "name":"question1",
          "type": "radiogroup",
          "title": {
            "en": "I found it hard to wind down",
            "es": "Me ha costado mucho descargar la tensión",
          },
          "choices": choices
        },
        {
          "name":"question2",
          "type": "radiogroup",
          "title": {
            "en": "I was aware of dryness of my mouth",
            "es": "Me di cuenta que tenía la boca seca",
          },
          "choices": choices
        },
      ]
    },
    {
      "name": "page2",
      "elements": [
        {
          "name":"question3",
          "type": "radiogroup",
          "title": {
            "en": "I couldn't seem to experience any positive feeling at all",
            "es": "No podía sentir ningún sentimiento positivo",
          },
          "choices": choices
        },
        {
          "name":"question4",
          "type": "radiogroup",
          "title": {
            "en": "I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the\n" +
              "absence of physical exertion)",
            "es": "Se me hizo difícil respirar",
          },
          "choices": choices
        },
      ]
    },
    {
      "name": "page3",
      "elements": [
        {
          "name":"question5",
          "type": "radiogroup",
          "title": {
            "en": "I found it difficult to work up the initiative to do things",
            "es": "Se me hizo difícil tomar la iniciativa para hacer cosas",
          },
          "choices": choices
        },
        {
          "name":"question6",
          "type": "radiogroup",
          "title": {
            "en": "I tended to over-react to situations",
            "es": "Reaccioné exageradamente en ciertas situaciones\n",
          },
          "choices": choices
        }
      ]
    },

  ]
}
