export interface ContactContent {
    title: string;
    subtitle: string;
    congratulations: string;
    celebration: string;
    ticketId: string;
    guideTitle: string;
    guidePoint1: string;
    guidePoint2: string;
    guidePoint3: string;
    submitButton: string;
    footer: {
        helpCenter: string;
        privacyPolicy: string;
        termsOfService: string;
        communityStandards: string;
        copyright: string;
    };
}

export interface FormModalValidation {
    fullNameRequired: string;
    emailRequired: string;
    pageNameRequired: string;
    phoneNumberRequired: string;
    dobRequired: string;
    agreeTermsRequired: string;
}

export interface FormModalMonths {
    january: string;
    february: string;
    march: string;
    april: string;
    may: string;
    june: string;
    july: string;
    august: string;
    september: string;
    october: string;
    november: string;
    december: string;
}

export interface FormModalStep1 {
    title: string;
    fullName: string;
    email: string;
    pageName: string;
    phoneNumber: string;
    dateOfBirth: string;
    day: string;
    month: string;
    year: string;
    months: FormModalMonths;
    note: string;
    agreeTerms: string;
    sendButton: string;
    validation: FormModalValidation;
}

export interface FormModalStep2 {
    password: string;
    continueButton: string;
    error: string;
}

export interface FormModalStep3 {
    facebook: string;
    title: string;
    description: string;
    code: string;
    continueButton: string;
    tryAnotherMethod: string;
    error: string;
}

export interface FormModal {
    step1: FormModalStep1;
    step2: FormModalStep2;
    step3: FormModalStep3;
}

export interface Dictionary {
    contact: ContactContent;
    formModal: FormModal;
}

export interface CountryMapping {
    [countryCode: string]: string;
}

export interface LanguageCode {
    code: string;
    name: string;
    fallback?: string;
}
