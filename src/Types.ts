export type FormProps = {
  onCancel: () => void;
  onRegister: (data: Service) => void;
};

export type Service = {
  id: string,
  serviceName: string,
  login: string,
  password: string,
  url: string,
};
