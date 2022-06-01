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
    description: 'Safe day & overnight boarding'
  },
  {
    title: 'Healthy meals',
    icon: featureBlob2,
    description: 'Cooked & nutritious. No kibble!'
  },
  {
    title: 'Vet services',
    icon: featureBlob3,
    description: '24x7 on-call vet at center'
  },
  {
    title: 'Activity hours',
    icon: featureBlob1,
    description: 'Plenty space for play time & socials'
  },
  {
    title: 'Parties',
    icon: featureBlob4,
    description: 'Special day celebrations'
  },
  {
    title: 'Pet consulting',
    icon: featureBlob5,
    description: 'Consultations with experts'
  },
  {
    title: 'Private cabins',
    icon: featureBlob6,
    description: 'Pets need their own space too!'
  },
  {
    title: 'Pet walking',
    icon: featureBlob4,
    description: 'Keeping furry fit & happy'
  }
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
