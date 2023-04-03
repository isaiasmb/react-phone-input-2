declare module "react-phone-input-2" {
  import React from "react";

  type Regions = string | string[];

  export type CountryData = {
    name: string;
    dialCode: string;
    countryCode: string;
    format: string;
  }

  export type CountryItem = {
    regions: Regions;
    iso2: string;
    priority: number;
  } & CountryData;

  export type Country = string | number;

  interface Style {
    containerClass?: string;
    inputClass?: string;
    buttonClass?: string;
    dropdownClass?: string;
    searchClass?: string;

    containerStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    buttonStyle?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
    searchStyle?: React.CSSProperties;
  }

  interface PhoneInputEventsProps {
    onChange?(
      value: string,
      data: CountryData | {},
      event: React.ChangeEvent<HTMLInputElement>,
      formattedValue: string
    ): void;
    onFocus?(
      event: React.FocusEvent<HTMLInputElement>,
      data: CountryData | {}
    ): void;
    onBlur?(
      event: React.FocusEvent<HTMLInputElement>,
      data: CountryData | {}
    ): void;
    onClick?(
      event: React.MouseEvent<HTMLInputElement>,
      data: CountryData | {}
    ): void;
    onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void;
    onEnterKeyPress?(event: React.KeyboardEvent<HTMLInputElement>): void;
    isValid?: ((
      value: string,
      country: object,
      countries: object[],
      hiddenAreaCodes: object[],
    ) => boolean | string) | boolean;
    onMount?(
      value: string,
      data: CountryData | {},
      formattedValue: string
    ): void;
  }

  /**
   * example: {ca: 0, us: 1, kz: 0, ru: 1}
   */
  export type PriorityCountries = {
    [key: string]: number;
  };

  /**
   * example: {gr: ['2694', '2647'], fr: ['369', '463'], us: ['300']}
   */
  export type AreaCodes = {
    [key: string]: string[];
  };

  /**
   * example: {fr: '(...) ..-..-..', at: '(....) ...-....'}
   */
  export type Masks = {
    [key: string]: string;
  };

  export type Localization = {
    [key: string]: string;
  };

  export interface PhoneInputProps extends PhoneInputEventsProps, Style {
    country?: Country;
    value?: string | null;

    onlyCountries?: string[];
    preferredCountries?: string[];
    excludeCountries?: string[];

    placeholder?: string;
    searchPlaceholder?: string;
    searchNotFound?: string;
    disabled?: boolean;

    autoFormat?: boolean;
    enableAreaCodes?: boolean;
    enableTerritories?: boolean;

    disableCountryCode?: boolean;
    disableDropdown?: boolean;
    enableLongNumbers?: boolean | number;
    countryCodeEditable?: boolean;
    enableSearch?: boolean;
    disableSearchIcon?: boolean;

    regions?: Regions;

    inputProps?: object;
    localization?: Localization;
    masks?: Masks;
    areaCodes?: AreaCodes;

    preserveOrder?: string[];

    defaultMask?: string;

    alwaysDefaultMask?: boolean;
    prefix?: string;
    copyNumbersOnly?: boolean;
    renderStringAsFlag?: string;
    autocompleteSearch?: boolean;
    jumpCursorToEnd?: boolean;
    priority?: PriorityCountries;
    enableAreaCodeStretch?: boolean;
    enableClickOutside?: boolean;
    showDropdown?: boolean;

    defaultErrorMessage?: string;
    specialLabel?: string;
    disableInitialCountryGuess?: boolean;
    disableCountryGuess?: boolean;
  }

  type GuessSelectedCountryProps = {
    inputNumber: string;
    country: Country;
    onlyCountries?: CountryItem[];
    hiddenAreaCodes?: CountryItem[];
    enableAreaCodes?: boolean;
  };

  type GetInitializedCountriesProps = {
    priority?: PriorityCountries;
    areaCodes?: AreaCodes;
    enableAreaCodes?: boolean;
    prefix?: string;
    enableTerritories?: boolean;
    regions?: Regions;
    masks?: Masks;
    defaultMask?: string;
    alwaysDefaultMask?: boolean;
  };

  type LocalizeCountriesProps = {
    countries: CountryItem[];
    localization?: Localization;
    preserveOrder?: boolean;
  };

  type RemoveCountriesProps = {
    onlyCountries: CountryItem[];
    excludeCountries?: string[];
  };

  type GetFilteredCountryListProps = {
    countryCodes: string[];
    sourceCountryList: CountryItem[];
    preserveOrder?: boolean;
  };

  type FormatNumberProps = {
    text: string;
    country: CountryItem;
    disableCountryCode?: boolean;
    enableAreaCodeStretch?: boolean;
    enableLongNumbers?: boolean | number;
    autoFormat: boolean;
    prefix?: string;
  };

  export function getCountryItem(countryDataArray: any, prefix?: string, defaultMask?: string, alwaysDefaultMask?: string): CountryItem;
  export function getCountryData(selectedCountry: CountryItem): CountryData;
  export function getInitializedCountries(props: GetInitializedCountriesProps = {}): { initializedCountries: CountryItem[], hiddenAreaCodes: CountryItem[] };
  export function guessSelectedCountry(props: GuessSelectedCountryProps): CountryItem;
  export function localizeCountries(props: LocalizeCountriesProps): CountryItem[];
  export function removeCountries(props: RemoveCountriesProps): CountryItem[];
  export function getFilteredCountryList(props: GetFilteredCountryListProps): CountryItem[];
  export function formatNumber(props: FormatNumberProps): string;

  export const countriesList: [string, string[], string, string, number | undefined, string[] | undefined][];

  const PhoneInput: React.FC<PhoneInputProps>;
  export default PhoneInput;
}
