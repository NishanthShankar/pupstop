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
    description: 'Safe day & overnight boarding for your fur babies'
  },
  {
    title: 'Healthy meals',
    icon: featureBlob2,
    description: 'Home cooked fresh & nutritious meal; no kibble!'
  },
  {
    title: 'Vet services',
    icon: featureBlob3,
    description: '24x7 on-call vet services at center for immediate attention'
  },
  {
    title: 'Activity hours',
    icon: featureBlob1,
    description: 'Plenty space for play time & pet socials'
  },
  {
    title: 'Parties',
    icon: featureBlob4,
    description: 'Celebrations for your pets special days'
  },
  {
    title: 'Pet consulting',
    icon: featureBlob5,
    description: 'professional services for pet queries'
  },
  {
    title: 'Private cabins',
    icon: featureBlob6,
    description: 'even pets can need their own space!'
  },
  {
    title: 'Pet walking',
    icon: featureBlob4,
    description: 'For your pet’s health, behavior & stimulation.'
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
    border: '2px solid #5d53de'
  })
}
