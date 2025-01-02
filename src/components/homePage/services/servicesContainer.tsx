import { Service } from "@/types/Service";
import "./servicesContainer.scss";

interface ServicesContainerProps {
  services: Service[];
}

export default function ServicesContainer({
  services,
}: ServicesContainerProps) {
  return (
    <div className="service-overlay">
      <div className="services-container">
        <div className="service-info-container">
          <h1 className="text-2xl font-bold mb-16">УСЛУГИ</h1>
          <ul className="service-grid">
            {services.map((service, index) => {
              return (
                <li className="one-service" key={index}>
                  <div className="bg-orange p-4 rounded">
                    <img src={service.image} alt="" />
                  </div>
                  <p>{service.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src="/service-images/fourth-container.jpg"
            alt=""
            className="w-[90%] service-main-image"
          />
        </div>
      </div>
    </div>
  );
}
