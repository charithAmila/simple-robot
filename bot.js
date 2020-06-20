 const Bot = (level, user) => {
  switch (level) {
    case AUTH:
      return {
        messages: ["Let's get you settled in", 'Hello there 👋'],
        options: [
          {option: 'Sign In', action: SIGN_IN, theam: GREEN_QUICK_REPLY},
          {option: 'Create an account', action: CREATE_ACCOUNT},
          {option: 'Ask question', action: ASK_QUESTION},
        ],
      };
    case WELCOME:
      return {
        messages: [
          'What do you want to do?',
          'Welcome back ' + user.first_name + '! 👋',
        ],
        options: [
          {
            option: 'Place new order',
            action: PLACE_NEW_ORDER,
            nextAction: SET_PRESCRIPTION,
          },
          {
            option: 'Re-order/Refill my meds',
            theam: GREEN_QUICK_REPLY,
            action: RE_ORDER_RE_FILL,
            nextAction: SELECT_RE_ORDER_PRESCRIPTIONS,
          },
          {option: 'View history'},
          {option: 'Ask question'},
        ],
      };

    case SELECT_RE_ORDER_PRESCRIPTIONS:
      return {
        options: [
          {
            option: 'Select Prescription',
            action: SELECT_PRESCRIPTION,
            // nextAction: SET_PRESCRIPTION,
          },
          {
            option: 'What does this mean?',
            type: QUICK_REPLY_WITH_HELPER,
          },
        ],
      };

    case SET_PRESCRIPTION:
      return {
        options: [
          {
            option: 'Upload prescription',
            action: UPLOAD_PRESCRIPTION,
            nextAction: SET_TIME_PERIODS,
          },
        ],
      };
    case SET_TIME_PERIODS:
      return {
        options: [
          {
            option: '1 Week',
            action: TIME_PERIODS,
            nextAction: SET_PERSON,
          },
          {
            option: '2 Weeks',
            action: TIME_PERIODS,
            nextAction: SET_PERSON,
          },
          {
            option: '1 Month',
            action: TIME_PERIODS,
            nextAction: SET_PERSON,
          },
          {
            option: 'Other',
            action: OPEN_TEXT_EDITOR,
            nextAction: SET_PERSON,
            type: QUICK_REPLY_WITH_KEYBOAR_ICON,
          },
          {
            option: 'What does this mean?',
            type: QUICK_REPLY_WITH_HELPER,
          },
        ],
      };
    case SET_PERSON:
      return {
        options: [
          {option: "No it's for me", action: SELECT_PERSON},
          {option: 'Mother', action: SELECT_PERSON},
          {
            option: 'Add family member',
            action: ADD_FAMILY_MEMBER,
            type: QUICK_REPLY_WITH_KEYBOAR_ICON,
          },
          {
            option: 'What does this mean?',
            type: QUICK_REPLY_WITH_HELPER,
          },
        ],
      };
    case REMOVE_ITEMS:
      return {
        options: [
          {option: 'Remove some items', action: OPEN_COST_BREAKDOWN},
          {
            option: 'Type in a note',
            action: OPEN_TEXT_EDITOR,
            type: QUICK_REPLY_WITH_KEYBOAR_ICON,
          },
          {
            option: 'What does this mean?',
            type: QUICK_REPLY_WITH_HELPER,
          },
        ],
      };
    case 6:
      return {
        options: [
          {option: 'Type in a Question', action: OPEN_TEXT_EDITOR},
          {option: 'Ask for an update', action: OPEN_TEXT_EDITOR},
        ],
      };
    case 7:
      return {
        options: [
          {
            option: 'Place order',
            action: PLACE_ORDER,
            theam: GREEN_QUICK_REPLY,
          },
          {
            option: 'I need to make some changes',
            action: NEED_MAKE_CHANGES,
            nextAction: REMOVE_ITEMS,
          },
          {option: 'I have a question', type: QUICK_REPLY_WITH_KEYBOAR_ICON},
          {
            option: 'What does this mean?',
            type: QUICK_REPLY_WITH_HELPER,
          },
        ],
      };
    case 8:
      return {
        options: [
          {option: 'Cash On Delivery', action: SELECT_CASH_ON_DELIVERY},
          {option: 'Card On Delivery'},
          {option: 'Online Payment'},
          {
            option: 'What does this mean?',
            type: QUICK_REPLY_WITH_HELPER,
          },
        ],
      };
    case 9:
      return {
        options: [
          {option: 'Send Location', action: GET_LOCATION},
          {
            option: 'What does this mean?',
            type: QUICK_REPLY_WITH_HELPER,
          },
        ],
      };
    case 10:
      return {
        options: [
          {
            option: 'Select date & time',
            action: SELECT_DATE_AND_TIME,
          },
        ],
      };
    case 11:
      return {
        options: [
          {
            option: 'Confirm Order',
            action: CONFIRM_ORDER,
            theam: GREEN_QUICK_REPLY,
          },
          {
            option: 'Change Payment Method',
          },
          {
            option: 'Cancel Order',
          },
          {
            option: 'What does this mean?',
            type: QUICK_REPLY_WITH_HELPER,
          },
        ],
      };
    case 12:
      return {
        options: [
          {
            option: 'Type in a Question',
            action: TYPE_QUESTION,
          },
          {
            option: 'Ask for an update',
            action: ASK_UPDATE,
          },
        ],
      };
    case 13:
      return {
        options: [
          {
            option: 'Add delivery note',
            action: ADD_DELIVERY_NOTE,
            type: QUICK_REPLY_WITH_KEYBOAR_ICON,
          },
          {
            option: 'Call Diriver',
            action: CALL_DRIVER,
          },
        ],
      };
    case 14:
      return {
        messages: ["Let's get you settled in"],
        options: [
          {
            option: 'Maybe Later ',
            action: RATE_LATER,
          },
        ],
      };
    case 15:
      return {
        options: [],
      };
    case 16:
      return {
        options: [
          {
            option: 'I have a question about my meds',
            action: QUESTION_ABOUT_MED,
            type: QUICK_REPLY_WITH_KEYBOAR_ICON,
          },
          {
            option: 'Back to Homepage',
            action: BACK_TO_HOME,
            theam: GREEN_QUICK_REPLY,
          },
        ],
      };

    default:
      return {
        options: [],
      };
  }
};
