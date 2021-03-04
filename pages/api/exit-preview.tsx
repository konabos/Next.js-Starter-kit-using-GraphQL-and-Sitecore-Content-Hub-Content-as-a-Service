export default async function exit(_, res): Promise<void> {
  res.clearPreviewData();
  res.end('Preview mode DISABLED');
  res.end();
}
