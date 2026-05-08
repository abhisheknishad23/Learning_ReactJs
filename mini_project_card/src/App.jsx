import React from 'react'
import { Bookmark, User } from 'lucide-react';
import Card from './components/Card';
import Profile from './components/Profile'

const App = () => {

  const jobs=[
  {
    "brand_logo": "https://logo.clearbit.com/google.com",
    "company_name": "Google",
    "date_posted": "2 days ago",
    "post_tag1": "Full-time",
    "post_tag2": "Senior Level",
    "pay": "$85/hr",
    "location": "Gurgaon, Delhi NCR"
  },
  {
    "brand_logo": "https://logo.clearbit.com/meta.com",
    "company_name": "Meta",
    "date_posted": "5 days ago",
    "post_tag1": "Full-time",
    "post_tag2": "Senior Level",
    "pay": "$92/hr",
    "location": "Gurgaon, Delhi NCR"
  },
  {
    "brand_logo": "https://logo.clearbit.com/amazon.com",
    "company_name": "Amazon",
    "date_posted": "1 week ago",
    "post_tag1": "Full-time",
    "post_tag2": "Junior Level",
    "pay": "$45/hr",
    "location": "Delhi, India"
  },
  {
    "brand_logo": "https://logo.clearbit.com/apple.com",
    "company_name": "Apple",
    "date_posted": "3 days ago",
    "post_tag1": "Full-time",
    "post_tag2": "Mid-Senior Level",
    "pay": "$78/hr",
    "location": "Gurgaon, Delhi NCR"
  },
  {
    "brand_logo": "https://logo.clearbit.com/microsoft.com",
    "company_name": "Microsoft",
    "date_posted": "10 days ago",
    "post_tag1": "Full-time",
    "post_tag2": "Junior Level",
    "pay": "$40/hr",
    "location": "Noida, Delhi NCR"
  },
  {
    "brand_logo": "https://logo.clearbit.com/netflix.com",
    "company_name": "Netflix",
    "date_posted": "2 weeks ago",
    "post_tag1": "Part-time",
    "post_tag2": "Senior Level",
    "pay": "$110/hr",
    "location": "New Delhi, India"
  },
  {
    "brand_logo": "https://logo.clearbit.com/adobe.com",
    "company_name": "Adobe",
    "date_posted": "4 days ago",
    "post_tag1": "Full-time",
    "post_tag2": "Junior Level",
    "pay": "$38/hr",
    "location": "Noida, Delhi NCR"
  },
  {
    "brand_logo": "https://logo.clearbit.com/salesforce.com",
    "company_name": "Salesforce",
    "date_posted": "6 days ago",
    "post_tag1": "Full-time",
    "post_tag2": "Senior Level",
    "pay": "$88/hr",
    "location": "Gurgaon, Delhi NCR"
  },
  {
    "brand_logo": "https://logo.clearbit.com/nvidia.com",
    "company_name": "Nvidia",
    "date_posted": "1 day ago",
    "post_tag1": "Full-time",
    "post_tag2": "Mid Level",
    "pay": "$70/hr",
    "location": "Gurgaon, Delhi NCR"
  },
  {
    "brand_logo": "https://logo.clearbit.com/uber.com",
    "company_name": "Uber",
    "date_posted": "8 days ago",
    "post_tag1": "Part-time",
    "post_tag2": "Junior Level",
    "pay": "$35/hr",
    "location": "Gurgaon, Delhi NCR"
  }
]

  jobs.map(function(elem){
    console.log(elem);
  })


  return (
    <div className='parent'>
    {/* <Card />
    <Card /> */}
    <Profile />
    </div>
  )
}

export default App
