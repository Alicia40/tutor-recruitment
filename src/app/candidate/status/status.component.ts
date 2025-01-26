getStatusClass(status: string): string {
  switch (status) {
    case 'En cours de traitement':
      return 'en-cours';
    case 'Acceptée':
      return 'acceptee';
    case 'Refusée':
      return 'refusee';
    default:
      return '';
  }
}
