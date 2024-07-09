import { StylesConfig } from 'react-select';

interface OptionType {
    value: string;
    label: string;
}

export const CustomSelect = (isDark: boolean): StylesConfig<OptionType, false> => ({
    control: (provided) => ({
        ...provided,
        backgroundColor: isDark ? '#333' : '#fff',
        borderColor: 'rgba(118, 118, 118, 0.8)',
        '&:hover': {
            borderColor: isDark ? '#bb86fc' : '#2684ff',
        },
        color: isDark ? '#fff' : '#121212',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected
            ? isDark ? '#bb86fc' : '#2684ff'
            : state.isFocused
            ? (isDark ? '#444' : '#f0f0f0')
            : isDark ? '#333' : '#fff',
        color: state.isSelected ? '#fff' : isDark ? '#fff' : '#121212',
        '&:active': {
            backgroundColor: state.isSelected ? '#0056b3' : isDark ? '#444' : '#f0f0f0',
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: isDark ? '#fff' : '#121212',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: isDark ? '#333' : '#fff',
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: isDark ? '#555' : '#e0e0e0',
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: isDark ? '#fff' : '#121212',
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: isDark ? '#fff' : '#121212',
        '&:hover': {
            backgroundColor: isDark ? '#777' : '#d3d3d3',
            color: isDark ? '#fff' : '#121212',
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: isDark ? '#aaa' : '#999',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: isDark ? '#bb86fc' : '#2684ff',
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        backgroundColor: isDark ? '#bb86fc' : '#2684ff',
    }),
    clearIndicator: (provided) => ({
        ...provided,
        color: isDark ? '#bb86fc' : '#2684ff',
    }),
    loadingIndicator: (provided) => ({
        ...provided,
        color: isDark ? '#bb86fc' : '#2684ff',
    }),
});
