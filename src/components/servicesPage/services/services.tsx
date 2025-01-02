import services from "../../../data/services.json";
import "./services.scss";

export default function Services() {
  return (
    <div className="services">
      <div className="services_wrapper">
        <div className="services_header">
          <h1 className="font-bold text-2xl">УСЛУГИ</h1>
          <p className="text-sm">
            Главная <span className="text-gray4">| Доставка</span>
          </p>
        </div>
        <div className="services_grid">
          {services.map((service, index) => {
            return (
              <div className="service" key={index}>
                <div className="service-image">
                  <img src={service.image} alt="" />
                </div>
                <p className="service-text">{service.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
