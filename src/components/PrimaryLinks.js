
import routes from './../app/routes';

const primaryLinks = () => routes.filter((route) => route.menu === 'PRIMARY');

export default primaryLinks