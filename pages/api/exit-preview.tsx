export default async function exit(_, res): Promise<void> {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' });
  res.end();
}
