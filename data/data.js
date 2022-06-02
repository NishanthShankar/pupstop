import featureBlob1 from 'assets/feature_blob_1.svg'
import featureBlob2 from 'assets/feature_blob_2.svg'
import featureBlob3 from 'assets/feature_blob_3.svg'
import featureBlob4 from 'assets/feature_blob_4.svg'
import featureBlob5 from 'assets/feature_blob_5.svg'
import featureBlob6 from 'assets/feature_blob_6.svg'

export const benefits = [
  {
    title: 'Boarding  ',
    icon: featureBlob1,
    type: 'egg',
    description: 'Safe day & overnight boarding'
  },
  {
    title: 'Healthy meals',
    icon: featureBlob2,
    type: 'shell',
    description: 'Cooked & nutritious. No kibble!'
  },
  {
    title: 'Vet services',
    type: 'egg',
    icon: featureBlob1,
    description: '24x7 on-call vet at center'
  },
  {
    title: 'Activity hours',
    icon: featureBlob2,
    type: 'shell',
    description: 'Plenty space for play time & socials'
  },
  {
    title: 'Parties',
    icon: featureBlob1,
    type: 'egg',
    description: 'Special day celebrations'
  },
  {
    title: 'Private cabins',
    icon: featureBlob2,
    type: 'shell',
    description: 'Pets need their own space too!'
  }
  // {
  //   title: 'Pet consulting',
  //   icon: featureBlob1,
  //   description: 'Consultations with experts'
  // },
  // {
  //   title: 'Pet walking',
  //   icon: featureBlob1,
  //   description: 'Keeping furry fit & happy'
  // }
]

export const serviceOptions = [
  { value: 'Day care (private cabins)', label: 'Day care (private cabins)' },
  { value: 'Day care (shared suites)', label: 'Day care (shared suites)' },
  {
    value: 'Overnight boarding (shared suites)',
    label: 'Overnight boarding (shared suites)'
  },
  {
    value: 'Overnight boarding (shared suites)',
    label: 'Overnight boarding (shared suites)'
  },
  { value: 'Pet Parties', label: 'Pet Parties' },
  { value: 'Pet Walking', label: 'Pet Walking' },
  { value: 'Pet consulting', label: 'Pet consulting' },
  { value: 'Monthly boarding', label: 'Monthly boarding' }
]

export const petOptions = [
  { value: 'Cat', label: 'Cat' },
  { value: 'Dog', label: 'Dog' }
]

export const selectStyles = {
  // option: (provided, state) => ({
  //   ...provided,
  //   borderBottom: '1px dotted pink',
  //   color: state.isSelected ? 'red' : 'blue',
  //   padding: 20
  // }),
  control: provided => ({
    ...provided,
    // none of react-select's styles are passed to <Control />
    border: '1px solid #ec6336',
    borderRadius: 999
  })
}
