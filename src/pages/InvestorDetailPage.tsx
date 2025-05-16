import Layout from '@/components/Layout'
import React from 'react';
import profileImage from '../assets/profile.jpg';

const InvestorDetailPage = (props) => {
  return (
    <Layout>
        <div>
          <p>Investor</p>
          <div>
          <div className="relative">
                    <img src={profileImage} className="size-[40px] rounded-full" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border border-white rounded-full"></span>
                </div>
          <p></p>
          </div>
         
        </div>
    </Layout>
  )
}

export default InvestorDetailPage