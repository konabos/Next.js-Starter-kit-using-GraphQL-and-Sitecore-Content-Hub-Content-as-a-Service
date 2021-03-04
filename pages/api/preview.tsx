export default async function handler(req, res): Promise<any> {
  res.setPreviewData({});
  res.end('Preview mode ENABLED');
  res.end();
}
