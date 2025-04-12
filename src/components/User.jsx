
import React from 'react';

const UserServices = ({ userData }) => {
  if (!userData) return <p>Loading...</p>;

  const Section = ({ title, children }) => (
    <div className="section">
      <h2>{title}</h2>
      {children}
    </div>
  );

  const ServiceCard = ({ data }) => (
    <div className="card">
      {Object.entries(data).map(([key, val]) => (
        <div key={key}>
          <strong>{formatLabel(key)}:</strong> {val ?? 'N/A'}
        </div>
      ))}
    </div>
  );

  const formatLabel = (text) =>
    text.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

  return (
    <div className="container">
      <h1>User: {userData.username}</h1>

      <Section title="History - Booked">
        {userData.history.booked.map((item, idx) => (
          <ServiceCard key={idx} data={item} />
        ))}
      </Section>

      <Section title="History - Reserved">
        {userData.history.reserved.map((item, idx) => (
          <ServiceCard key={idx} data={item} />
        ))}
      </Section>

      <Section title="Current - Booked">
        {userData.current.booked.map((item, idx) => (
          <ServiceCard key={idx} data={item} />
        ))}
</Section>

      <Section title="Current - Reserved">
        {userData.current.reserved.map((item, idx) => (
          <ServiceCard key={idx} data={item} />
        ))}
      </Section>

      <Section title="Available Services">
        {userData.availableServices.map((service, idx) => (
          <div key={idx} className="service-card">
            <p><strong>Service Name:</strong> {service.serviceName}</p>
            <p><strong>Service Type:</strong> {service.serviceType}</p>
            <p><strong>Duration:</strong> {service.duration}</p>
            <p><strong>Price (Original):</strong> ${service.price.original}</p>
            <p><strong>Price (With Discount):</strong> ${service.price.withDiscount}</p>
          </div>
        ))}
      </Section>
    </div>
  );
};

export default UserServices;
