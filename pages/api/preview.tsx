export default async function handler(req, res): Promise<any> {
  res.setPreviewData({});
  res.writeHead(307, { Location: '/' });
  res.end();
}
