import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { getUserLinks, updateLinkAlias } from '../../services/linkService';
import AllLinkContext from '../../context/AllLinkContext';
import { useContext } from "react";


const EditLinkInfo = ({ setVisibility, originalLink = "", shortLink = "" , linkId}) => {
const [Saving, setSaving] = useState(false);
  const getAlias = (url) => {
    if (!url) return "";
    try {
      const parsed = new URL(url);
      return parsed.pathname.replace("/", "");
    } catch (e) {
      return "";
    }
  };

  const getPrefix = (url) => {
    if (!url) return "";
    try {
      const parsed = new URL(url);
      return `${parsed.origin}/`;
    } catch (e) {
      return "";
    }
  };

  const initialAlias = getAlias(shortLink);
  const [alias, setAlias] = useState(initialAlias);
  const { setAllLinks } = useContext(AllLinkContext);
  const [error, setError] = useState(null);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setSaving(true);
      const res = await updateLinkAlias(linkId, alias);
      if (!res.success) {
        throw new Error(res?.message || 'Failed to update link alias');
      }
      console.log('Link alias updated successfully:', res.data);

      const updatedLinks = await getUserLinks();
      if (updatedLinks?.success) {
        setAllLinks(updatedLinks.data);
      }
      setSaving(false);
      setVisibility(false);

    } catch (err) {
      setSaving(false);
      setError(err.message || 'An error occurred while saving changes');
      console.error('Error saving changes:', err);
    }
  }

  useEffect(() => {
    setAlias(initialAlias);
  }, [shortLink]);


  const prefix = getPrefix(shortLink);

  const truncatedOriginal = originalLink?.length > 140
    ? `${originalLink.substring(0, 137)}...`
    : originalLink;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      aria-modal="true"
      role="dialog"
    >
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -16, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="w-full max-w-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold">Edit Link</h2>
          <button
            aria-label="Close Edit Link"
            className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
            onClick={() => setVisibility(false)}
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSaveChanges} className="px-6 py-5">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Short Link</label>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
              {prefix}
            </span>

            <input
              aria-label="custom alias"
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              placeholder="Enter custom alias"
              className="flex-1 px-3 py-2 border rounded-md bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {error && (
            <div className="mt-4 text-sm text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setVisibility(false)}
              className="px-4 py-2 rounded-md border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 hover:text-black"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-sky-600 text-white text-sm font-medium hover:bg-sky-700"
            >
              {Saving? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditLinkInfo;